const https = require('https');

// Use service key - bypasses network restrictions from Vercel's IPs
const SB_URL = 'https://bhrswnbenkvflpdjhfpa.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJocnN3bmJlbmt2ZmxwZGpoZnBhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NjMxNzQ5NywiZXhwIjoyMDkxODkzNDk3fQ.qZue6ZLtEuXmNz1oOm7eDPhw9i-RfuYTUtPtj0eTcy0';

function sbFetch(path, method = 'GET', body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(SB_URL + path);
    const options = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method,
      headers: {
        'apikey': SB_KEY,
        'Authorization': 'Bearer ' + SB_KEY,
        'Content-Type': 'application/json',
        'Prefer': method === 'POST' ? 'resolution=merge-duplicates,return=representation' : 'return=representation',
      }
    };
    if (body) options.headers['Content-Length'] = Buffer.byteLength(JSON.stringify(body));
    
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(data || '[]') }); }
        catch { resolve({ status: res.statusCode, body: data }); }
      });
    });
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { action, table, cols, limit, order, eq_col, eq_val, conflict, bucket, filename } = req.query;

  try {
    let result;

    if (action === 'select') {
      const select = cols || '*';
      const lim = limit || '5000';
      let path = `/rest/v1/${table}?select=${select}&limit=${lim}`;
      if (order) { const [c,d] = order.split(':'); path += `&order=${c}.${d||'asc'}`; }
      if (eq_col && eq_val) path += `&${eq_col}=eq.${eq_val}`;
      result = await sbFetch(path);
    }
    else if (action === 'upsert') {
      result = await sbFetch(`/rest/v1/${table}?on_conflict=${conflict||'id'}`, 'POST', req.body);
    }
    else if (action === 'insert') {
      result = await sbFetch(`/rest/v1/${table}`, 'POST', req.body);
    }
    else if (action === 'update') {
      const path = `/rest/v1/${table}${eq_col ? `?${eq_col}=eq.${eq_val}` : ''}`;
      result = await sbFetch(path, 'PATCH', req.body);
    }
    else if (action === 'delete') {
      result = await sbFetch(`/rest/v1/${table}?${eq_col}=eq.${eq_val}`, 'DELETE');
    }
    else if (action === 'download') {
      const r = await sbFetch(`/storage/v1/object/${bucket||'jps_data'}/${filename}`);
      res.setHeader('Content-Type', 'text/csv');
      return res.status(r.status).send(r.body);
    }
    else {
      return res.status(400).json({ error: 'unknown action' });
    }

    res.status(result.status).json(result.body);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
};
