/**
 * 简单文件的写入
 * fs.writeFile(file, data[, options], callback)
 * fs.writeFileSync(file, data[, options])
 *      - file 要操作的文件的路径
 *      - data 要写入的数据
 *      - options 选项，可以对写入进行一些设置
 *          对象{
 *              - flags
 *                  r 只读
 *                  w 可写
 *                  a 追加
 *              }
 *      - callback 当写入完成以后执行的函数
 */

// 引入模块
var fs = require("fs");

// 绝对路径C:\\Users\\admin\\Desktop\\test.txt
fs.writeFile("hello3.txt", "这是通过writeFile写入的内容", { flag: "a" }, function (err) {
  if (!err) {
    console.log("写入成功");
  }
});
