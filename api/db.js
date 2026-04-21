const https = require('https');

const SB_URL = 'bhrswnbenkvflpdjhfpa.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJocnN3bmJlbmt2ZmxwZGpoZnBhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NjMxNzQ5NywiZXhwIjoyMDkxODkzNDk3fQ.qZue6ZLtEuXmNz1oOm7eDPhw9i-RfuYTUtPtj0eTcy0';

function sbReq(path, method, body) {
  return new Promise((resolve, reject) => {
    const bodyStr = body ? JSON.stringify(body) : null;
    const opts = {
      hostname: SB_URL,
      path,
      method: method || 'GET',
      headers: {
        'apikey': SB_KEY,
        'Authorization': 'Bearer ' + SB_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
      }
    };
    if (bodyStr) opts.headers['Content-Length'] = Buffer.byteLength(bodyStr);
    const req = https.request(opts, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, data: JSON.parse(d || '[]') }); }
        catch { resolve({ status: res.statusCode, data: d }); }
      });
    });
    req.on('error', reject);
    if (bodyStr) req.write(bodyStr);
    req.end();
  });
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const q = req.query;
  const action = q.action || 'select';
  const table = q.table || '';

  try {
    let r;
    if (action === 'select') {
      let path = `/rest/v1/${table}?select=${q.cols||'*'}&limit=${q.limit||5000}`;
      if (q.order) { const [c,d]=q.order.split(':'); path+=`&order=${c}.${d||'asc'}`; }
      if (q.eq_col) path += `&${q.eq_col}=eq.${q.eq_val}`;
      r = await sbReq(path);
    } else if (action === 'upsert') {
      r = await sbReq(`/rest/v1/${table}?on_conflict=${q.conflict||'id'}`, 'POST', req.body);
    } else if (action === 'insert') {
      r = await sbReq(`/rest/v1/${table}`, 'POST', req.body);
    } else if (action === 'update') {
      r = await sbReq(`/rest/v1/${table}?${q.eq_col}=eq.${q.eq_val}`, 'PATCH', req.body);
    } else if (action === 'delete') {
      r = await sbReq(`/rest/v1/${table}?${q.eq_col}=eq.${q.eq_val}`, 'DELETE');
    } else if (action === 'download') {
      r = await sbReq(`/storage/v1/object/${q.bucket||'jps_data'}/${q.filename}`);
      res.setHeader('Content-Type', 'text/csv');
      return res.status(r.status).send(r.data);
    } else {
      return res.status(400).json({error:'unknown action'});
    }
    res.status(200).json(r.data);
  } catch(e) {
    res.status(500).json({error: e.message});
  }
};
