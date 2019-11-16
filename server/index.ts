import { createServer } from "http";
import { parse } from "url";
import next from "next";
import express from "express";
import LRUCache from "lru-cache";

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

app.prepare().then(() => {
  const server = express();

  server.get("/a", (req, res) => {
    return app.render(req, res, "/search", req.query);
  });

  server.get("/api", (req, res) => {
    return res.send("Hello API");
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
