import next from "next";
import express from "express";
import LRUCache from "lru-cache";
import { ParamsDictionary, Request, Response } from "express-serve-static-core";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max:
    100 *
    1024 *
    1024 /* cache size will be 100 MB using `return n.length` as length() function */,
  length: (n: any, key) => {
    return n.length;
  },
  maxAge: 1000 * 60 * 60 * 24 * 30
});

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(req: Request<ParamsDictionary, any, any>) {
  return `${req.path}`;
}

const useCache = false;

app.prepare().then(() => {
  const server = express();

  server.get("/a", (req, res) => {
    return app.render(req, res, "/search", req.query);
  });

  server.get("/api", (req, res) => {
    return res.send("Hello API");
  });

  server.get("/_next/*", (req, res) => {
    /* serving _next static content using next.js handler */
    handle(req, res);
  });

  server.all(
    "*",
    (req: Request<ParamsDictionary, any, any>, res: Response<any>) => {
      /* serving page */
      // handle;
      if (useCache) {
        return renderAndCache(req, res);
      } else {
        return handle(req, res);
      }
    }
  );

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

async function renderAndCache(
  req: Request<ParamsDictionary, any, any>,
  res: Response<any>
) {
  const key = getCacheKey(req);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    //console.log(`serving from cache ${key}`);
    res.setHeader("x-cache", "HIT");
    res.send(ssrCache.get(key));
    return;
  }

  try {
    //console.log(`key ${key} not found, rendering`);
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, req.path, req.params);

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html);
      return;
    }

    // Let's cache this page
    ssrCache.set(key, html);

    res.setHeader("x-cache", "MISS");
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, req.path, req.query);
  }
}
