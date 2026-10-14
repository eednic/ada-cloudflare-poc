
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/redirect") {
      const token = url.searchParams.get("t") || "manual";

      const destination = new URL("/final", url.origin);
      destination.searchParams.set("t", token);

      return Response.redirect(destination.toString(), 302);
    }

    if (url.pathname === "/final") {
      const token = url.searchParams.get("t") || "manual";

      return new Response(
        `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>ADA Redirect Test</title>
</head>
<body>
  <main>
    <h1>Redirect Completed</h1>
    <p id="redirect-marker">Token: ${token.replace(/[&<>"']/g, "")}</p>
    <img id="redirect-proof" src="/pixel.svg">
  </main>
</body>
</html>`,
        {
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "no-store"
          }
        }
      );
    }

    return env.ASSETS.fetch(request);
  }
};
