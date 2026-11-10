// Adds X-Robots-Tag: noindex only on platform preview hostnames.
// Custom domains are untouched and stay index-eligible.
const PREVIEW_HOST = /\.(lovable\.app|workers\.dev|pages\.dev|netlify\.app)$/i;

export default async (request: Request, context: { next: () => Promise<Response> }) => {
  const response = await context.next();
  const host = new URL(request.url).hostname;
  const type = response.headers.get("content-type") ?? "";
  if (!PREVIEW_HOST.test(host) || !type.includes("text/html")) return response;
  const headers = new Headers(response.headers);
  headers.set("X-Robots-Tag", "noindex");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
};

export const config = { path: "/*" };
