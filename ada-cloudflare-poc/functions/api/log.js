export async function onRequestGet({ request }) {
  const url = new URL(request.url);
  const kind = (url.searchParams.get('kind') || 'unknown').slice(0, 60);
  const token = (url.searchParams.get('t') || '').slice(0, 100);
  console.log('ADA_POC_EVENT ' + JSON.stringify({time: new Date().toISOString(), kind, token, userAgent: request.headers.get('user-agent') || '', cfRay: request.headers.get('cf-ray') || ''}));
  return new Response(null, {status: 204, headers: {'Cache-Control': 'no-store'}});
}
