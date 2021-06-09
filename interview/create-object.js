/**
 * 如何在JS中创建对象
 */

// 1.使用对象字面量
let obj = {
  name: "xiaoxu"
};

// 2.使用构造函数
let obj = new Object();
obj.name = "xiaoxu";

// 3.使用Object.create方法
let obj = Object.create({
  name: "xiaoxu"
});

console.log(obj);
