/**
 * fs文件系统中的其它方法的使用
 */

var fs = require("fs");

/**
 * fs.existsSync(path) 检查文件是否存在
 */

/* var isExist = fs.existsSync("111.js");

console.log(isExist); */

/**
 * fs.stat(path, callback)
 * fs.statSync(path)
 * - 获取文件的状态
 * - 返回一个对象，对象中保存了当前状态的相关信息
 */

/* fs.stat("./01_buffer.js", function (err, stat) {
  if (!err) {
    console.log(stat.isFile()); // 是否是一个文件
    console.log(stat.isDirectory()); // 是否是一个文件夹(目录)
  }
}); */

/**
 * fs.unlink(path, callback)
 * fs.unlinkSync(path)
 * - 删除文件
 */

// fs.unlinkSync("hello.txt");

/**
 * fs.readdir(path[, options], callback)
 * fs.readdirSync(path[, options])
 * - 读取一个目录的结构
 *      files是一个字符串数组，每一个元素就是一个文件夹或文件的名字
 */

/* fs.readdir(".", function (err, files) {
  if (!err) {
    console.log(files);
  }
}); */

/**
 * fs.ftruncate(fd[, len], callback)
 * fs.ftruncateSync(fd[, len])
 * - 截断文件，将文件修改为指定的大小，中文大小为3个字节，多余的会乱码
 */

// fs.truncateSync("hello2.txt", 10);

/**
 * fs.mkdir(path[, mode], callback)
 * fs.mkdirSync(path[, mode])
 * - 创建一个目录
 *
 * fs.rmdir(path, callback)
 * fs.rmdirSync(path)
 * - 删除一个目录
 */

// fs.mkdirSync("hello");
// fs.rmdirSync("hello");

/**
 * fs.rename(oldPath, newPath, callback)
 * fs.renameSync(oldPath, newPath)
 * - 对文件进行重命名
 * - 参数
 *      oldPath 旧的路径
 *      newPath 新的路径
 *      callback 回调函数
 */

// fs.renameSync("copy.txt", "命名.txt");

/**
 * fs.watchFile(filename[, options], listener)
 * - 监视文件的修改
 * - 参数：
 *      filename 要监视的文件的名字
 *      options 配置选项
 *      listener 回调函数，当文件发生变化时，回调函数会执行
 *          在回调函数中会有两个参数：
 *              current 当前文件的状态
 *              previous 修改前文件的状态
 *                  这两个对象都是Stats对象
 */

fs.watchFile("hello2.txt", { interval: 1000 }, function (current, previous) {
  console.log("修改前文件大小：" + previous.size);
  console.log("修改后文件大小：" + current.size);
});
