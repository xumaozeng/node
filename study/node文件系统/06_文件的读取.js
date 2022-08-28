/**
 * 1.同步文件读取
 * 2.异步文件读取
 * 3.简单文件读取
 *  fs.readFile(path[, options], callback)
 *  fs.readFileSync(path[, options])
 *  - path 文件路径
 *  - options 读取的选项
 *  - callback 回调函数，通过回调函数将数据读取到内容返回(err, data)
 *      err 错误对象
 *      data 读取到的数据，返回一个Buffer
 * 4.流式文件读取
 *  流式文件读取也适用于大文件，可以多次将文件读取到内存中
 */

var fs = require("fs");

/* fs.readFile("测试1.jpg", function (err, data) {
  if (!err) {
    // console.log(data.toString()); // 如果是字符串
    // console.log(data); // 如果是图片
    // 写入到其他文件中
    fs.writeFile("hello.png", data, function (err) {
      console.log("图片复制成功");
    });
  }
});
 */

// 创建一个可读流
var rs = fs.createReadStream("./hello2.txt");
// 创建一个可写流
var ws = fs.createWriteStream("copy1.txt");

// 监听可读流的开启和关闭
rs.once("open", function () {
  console.log("可读流打开了~");
});

rs.once("close", function () {
  console.log("可读流关闭了~");
  //   ws.close();
});

// 监听可写流的开启和关闭
ws.once("open", function () {
  console.log("可写流打开了~");
});

ws.once("close", function () {
  console.log("可写流关闭了~");
});

// 如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读取数据
/* rs.on("data", function (data) {
  //   console.log(data.length);
  // 将读取到的数据写入到可写流中
  ws.write(data);
}); */

// pipe()可以将可读流中的内容直接输出到可写流中
rs.pipe(ws);
