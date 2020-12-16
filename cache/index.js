function updateTime() {
  this.timmer =
    this.timmer ||
    setInterval(() => (this.time = new Date().toUTCString()), 3000);
  return this.time;
}

// 静态服务
const http = require("http");
http
  .createServer((req, res) => {
    const { url } = req;
    if (url === "/") {
      res.end(`
      <html>
        Html Update Time ${updateTime()}
        <script src='main.js'></script>
      </html>
    `);
    } else if (url === "/main.js") {
      const content = `document.writeln('<br>JS Update Time: ${updateTime()}</br>')`;
      // 强制缓存
      // res.setHeader("Expires", new Date(Date.now() + 10 * 1000).toUTCString());
      // res.setHeader("Cache-Control", "max-age=20"); // 优先级高http1.0
      // 协商缓存第一种方法：last-modified&&if-modified-since
      res.setHeader("Cache-Control", "no-cache");
      /* res.setHeader("last-modified", new Date().toUTCString());
      if (
        new Date(req.headers["if-modified-since"]).getTime() + 5 * 1000 >
        Date.now()
      ) {
        console.log("协商缓存命中。。。");
        res.statusCode = 304;
        res.end();
        return;
      } */
      // 协商缓存第二种方法：Etag&&if-none-match(根据内容hash值)
      const crypto = require("crypto");
      const hash = crypto.createHash("sha1").update(content).digest("hex");
      res.setHeader("Etag", hash);
      if (req.headers["if-none-match"] === hash) {
        console.log("Etag 缓存命中。。。");
        res.statusCode = 304;
        res.end();
        return;
      }

      // 返回状态码
      res.statusCode = 200;
      res.end(content);
    } else if (url === "/favicon.ico") {
      res.end("");
    }
  })
  .listen(3000, () => {
    console.log("Http Cache Test Run at " + 3000);
  });
