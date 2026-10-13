export async function onRequestGet({ request }) {
 const url = new URL(request.url);
 const token = (url.searchParams.get('t') || '').slice(0,100);
 console.log('ADA_POC_REDIRECT ' + JSON.stringify({time:new Date().toISOString(),token}));
 return Response.redirect(url.origin + '/final/?t=' + encodeURIComponent(token), 302);
}
