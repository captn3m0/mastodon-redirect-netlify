import type { Config, Context } from "@netlify/edge-functions";

export default (request: Request, context: Context) => {
  const url = new URL(request.url);
  const resource = url.searchParams.get("resource");

  if (resource === "acct:nemo@tatooine.club") {
    return Response.redirect(
      `https://recurse.social/.well-known/webfinger?resource=acct:nemo@recurse.social`,
      301
    );
  }

  return new Response(JSON.stringify({ error: "Resource not found" }), {
    status: 404,
    headers: {
      "Content-Type": "application/jrd+json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const config: Config = {
  path: "/.well-known/webfinger",
};