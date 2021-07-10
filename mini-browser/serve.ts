import { createServer } from "http";

// 1、创建一个http.Server
const server = createServer((req, res) => {
  // 2、设置状态码
  res.statusCode = 200;

  // 3、设置响应头
  res.setHeader("Content-Type", "text/html");

  // 4、返回内容
  res.end("<h1>hello world!</h1>");
});

server.listen(8080, () => {
  console.log("server started on 8080 port!");
});
