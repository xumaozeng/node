/**
 * bind函数的实现：
 * 返回一个新的函数
 * 参数形式与call一样
 */

Function.prototype.myBind = function (context) {
  // 1.判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  // 2.获取参数
  const args = [...arguments].slice(1);

  // 3.返回一个新的函数
  const fn = this;

  return function Fn() {
    // 根据调用方式，传入不同的绑定值
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};

//test
function Point(x) {
  this.x = x;
}

Point.prototype.toString = function () {
  console.log(this.x);
};

const test = Point.myBind(null, 1);
const fn = new test();
fn.toString();
