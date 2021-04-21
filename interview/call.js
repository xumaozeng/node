/**
 * call函数的实现
 * 1.将函数设置为对象的属性
 * 2.执行该函数
 * 3.删除该属性
 */

Function.prototype.myCall = function (context) {
  // 1、判断调用对象是否是函数
  if (typeof this !== "function") {
    throw TypeError("type error");
  }
  // 2、判断context是否传入，没有则设置为window，并且取出参数
  context = context || window;
  const args = [...arguments].slice(1);
  // 3、将调用函数设置为传入对象context的属性
  const fn = Symbol();
  context[fn] = this;
  // 4、调用函数
  const result = context[fn](...args);
  // 5、删除函数属性并且返回result
  delete context[fn];
  return result;
};

//test
function hello(name) {
  console.log("hello " + name);
}

hello.call(null, "fangfang");
