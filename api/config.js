// Hands the browser the Supabase project URL and public (anon) key set in Vercel.
module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end('window.IRR_SUPABASE=' + JSON.stringify({
    url: process.env.SUPABASE_URL || '',
    key: process.env.SUPABASE_ANON_KEY || '',
  }) + ';');
};
