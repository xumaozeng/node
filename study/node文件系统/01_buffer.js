/**
 * Buffer(缓冲区)
 * - Buffer的结构和数组很像，操作的方法也和数组类似
 * - 数据中不能存储二进制的文件，而buffer就是专门用来存储二进制数据
 * - 使用buffer不需要引入模块，直接使用即可
 * - buffer中存储都是二进制数据，但是在显示时都是以16进制格式
 * - buffer中每个元素的范围都是从00-ff(16进制) 0-255(10进制) 00000000-11111111(2进制)
 * - 计算机中一个0或一个1称为1位(bit)
 * - 8bit = 1byte(字节)
 * - 1024byte = 1kb
 * - 1024kb = 1mb
 * - 1024mb = 1gb
 * - 1024gb = 1tb
 * - buffer中的一个元素，占用内存的一个字节
 */
var { Buffer } = require("buffer");
var str = "徐茂増";
var buf = Buffer.from(str);

var buf1 = Buffer.alloc(10);
buf1[2] = 0xaa;
console.log(buf1[2].toString(16));
