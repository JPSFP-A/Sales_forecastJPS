const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL  = 'https://bhrswnbenkvflpdjhfpa.supabase.co';
const SERVICE_KEY   = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJocnN3bmJlbmt2ZmxwZGpoZnBhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NjMxNzQ5NywiZXhwIjoyMDkxODkzNDk3fQ.qZue6ZLtEuXmNz1oOm7eDPhw9i-RfuYTUtPtj0eTcy0';

const cors = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type,x-action,x-table,x-filter',
};

module.exports = async (req, res) => {
  Object.entries(cors).forEach(([k,v]) => res.setHeader(k, v));
  if (req.method === 'OPTIONS') return res.status(200).end();

  const sb = createClient(SUPABASE_URL, SERVICE_KEY);
  const q  = req.query;
  const action  = (req.headers['x-action']  || q.action  || 'select').toLowerCase();
  const table   = (req.headers['x-table']   || q.table   || '');
  const filter  = (req.headers['x-filter']  || q.filter  || '');

  if (!table && !['upload','download'].includes(action)) {
    return res.status(400).json({ error: 'Missing table' });
  }

  try {
    // ── parse filter helper ──────────────────────────────────
    const applyFilter = (query, flt) => {
      if (!flt) return query;
      // supports: col=eq.val  col=neq.val  col=gt.val  col=lt.val
      const m = flt.match(/^(\w+)=(eq|neq|gt|lt|gte|lte)\.(.+)$/);
      if (!m) return query;
      const [, col, op, val] = m;
      return query[op](col, isNaN(val) ? val : Number(val));
    };

    // ── SELECT ───────────────────────────────────────────────
    if (action === 'select') {
      const cols  = q.cols  || '*';
      const limit = parseInt(q.limit || '5000');
      const order = q.order || null;
      let sq = sb.from(table).select(cols).limit(limit);
      if (order) {
        order.split(',').forEach(part => {
          const [col, dir] = part.trim().split(':');
          sq = sq.order(col, { ascending: dir !== 'desc' });
        });
      }
      sq = applyFilter(sq, filter);
      const { data, error } = await sq;
      if (error) throw error;
      return res.status(200).json(data ?? []);
    }

    // ── UPSERT ───────────────────────────────────────────────
    if (action === 'upsert') {
      const conflict = q.conflict || 'id';
      const { data, error } = await sb.from(table).upsert(req.body, { onConflict: conflict });
      if (error) throw error;
      return res.status(200).json(data ?? []);
    }

    // ── INSERT ───────────────────────────────────────────────
    if (action === 'insert') {
      const { data, error } = await sb.from(table).insert(req.body);
      if (error) throw error;
      return res.status(200).json(data ?? []);
    }

    // ── UPDATE ───────────────────────────────────────────────
    if (action === 'update') {
      const body = { ...req.body };
      const flt  = body._filter; delete body._filter;
      let uq = sb.from(table).update(body);
      uq = applyFilter(uq, flt || filter);
      const { data, error } = await uq;
      if (error) throw error;
      return res.status(200).json(data ?? []);
    }

    // ── DELETE ───────────────────────────────────────────────
    if (action === 'delete') {
      if (!filter) return res.status(400).json({ error: 'filter required for delete' });
      let dq = sb.from(table).delete();
      dq = applyFilter(dq, filter);
      const { data, error } = await dq;
      if (error) throw error;
      return res.status(200).json(data ?? []);
    }

    // ── STORAGE DOWNLOAD (CSV) ───────────────────────────────
    if (action === 'download') {
      const bucket   = q.bucket   || 'jps_data';
      const filename = q.filename || '';
      const { data, error } = await sb.storage.from(bucket).download(filename);
      if (error) throw error;
      const text = await data.text();
      res.setHeader('Content-Type', 'text/csv');
      return res.status(200).send(text);
    }

    // ── STORAGE UPLOAD (CSV) ─────────────────────────────────
    if (action === 'upload') {
      const bucket   = q.bucket   || 'jps_data';
      const filename = q.filename || '';
      // body is the raw CSV text
      const buf = Buffer.from(typeof req.body === 'string' ? req.body : JSON.stringify(req.body));
      const { data, error } = await sb.storage.from(bucket)
        .upload(filename, buf, { upsert: true, contentType: 'text/csv' });
      if (error) throw error;
      return res.status(200).json(data);
    }

    return res.status(400).json({ error: 'Unknown action: ' + action });

  } catch (err) {
    console.error('[jps-proxy]', err.message);
    return res.status(500).json({ error: err.message });
  }
};
