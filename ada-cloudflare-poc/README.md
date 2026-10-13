# ADA controlled Cloudflare Pages PoC

Deploy as a Cloudflare Pages project connected to GitHub. Upload **the contents of this folder to the repository root**. Framework preset: None; build command: `exit 0` (or leave blank if permitted); build output directory: `.`; root directory: repository root. Pages Functions require Git integration; dashboard direct uploads do not deploy functions.

Open `https://YOUR-PROJECT.pages.dev/?t=manual-001` to verify the static page and JavaScript marker.

Submit to the authorized ADA checker:

`{"url":"https://YOUR-PROJECT.pages.dev/?t=ada-cf-001"}`

Test redirect separately:

`{"url":"https://YOUR-PROJECT.pages.dev/redirect/?t=ada-cf-002"}`

The JavaScript sends a same-origin request to `/api/log?kind=javascript&t=...`. Inspect **Workers & Pages > project > Functions/Logs (real-time logs)** or use Wrangler tail for logs. Function invocation logs may require enabling observability depending on Cloudflare's dashboard version. No persistent storage is configured. Static asset hits are not logged by the Function. The returned accessibility JSON can show DOM modifications and iframe contents. Do not treat a successful fetch or JS beacon alone as a vulnerability or server command execution.

If Cloudflare Pages rejects `.` as output directory, place the static files in a `public/` folder and set build output directory to `public`, while keeping `functions/` at repository root.
