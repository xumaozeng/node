/**
 * new操作符
 * 1、创建一个空对象
 * 2、将对象的原型指向构造函数
 * 3、执行构造函数
 * 4、返回结果
 */

function myNew() {
  const obj = Object.create(null);
  const Con = [].shift.call(arguments);
  Object.setPrototypeOf(obj, Con.prototype);
  let result = Con.apply(obj, arguments);
  return result instanceof Object ? result : obj;
}
