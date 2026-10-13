export async function onRequestGet({ request }) {
 const url = new URL(request.url);
 const token = (url.searchParams.get('t') || '').slice(0,100);
 console.log('ADA_POC_FINAL ' + JSON.stringify({time:new Date().toISOString(),token}));
 const safe = token.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 return new Response(`<!doctype html><html lang="en"><head><title>Redirect result</title></head><body><main><h1>Redirect completed</h1><p>Marker: ADA-CF-REDIRECT-${safe}</p></main></body></html>`,{headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}});
}
