// 基于TCP协议实现HTTP服务

import { createServer } from "net";

const server = createServer(client => {
  console.log("address", client.remoteAddress);

  console.log("port", client.remotePort);

  // 接收客户端数据
  client.on("data", data => {
    console.log("-------------------------");
    console.log(data.toString());
    // 获取并解析，对应返回响应
    client.write(`HTTP/1.1 200 OK\r
    Content-Type: text/html\r
    Content-Length: 14\r\n
    <h1>hello,xiaoxu!</h1>
    `);

    // 关闭连接
    client.end();
  });
});

server.listen({
  host: "127.0.0.1",
  port: 8080
});
