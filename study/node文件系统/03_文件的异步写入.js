/**
 * 异步文件的写入
 *  fs.open(path, flags[, mode], callback)
 *  - 用来打开一个文件
 *  - 异步调用的方法，结果都是通过回调函数返回的
 *  - 回调函数两个参数
 *      err 错误对象，如果没有错误则为null
 *      fd 文件的描述符
 *  fs.write(fd, buffer[, offset[, length[, position]]], callback)
 *  - 用来写入文件
 *  fs.close(fd)
 *  - 关闭文件
 */

var fs = require("fs");

// 异步文件打开没有返回值-文件描述符
fs.open("hello2.txt", "w", function (err, fd) {
  // 判断打开是否出错
  if (!err) {
    // 写入文件
    console.log("打开文件成功");
    fs.write(fd, "写入异步文件的内容", function (err) {
      // 判断写入是否出错
      if (!err) {
        console.log("写入文件成功");
        // 关闭文件
        fs.close(fd, function (err) {
          if (!err) console.log("关闭文件成功");
        });
      }
    });
  } else {
    console.log(err);
  }
});
