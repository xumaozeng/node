/**
 * 组合继承=原型继承+构造函数继承
 */

function SuperType(name) {
  this.name = name;
  this.colors = ["red", "bule", "green"];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
};

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

SubType.prototype = new SuperType();

SubType.prototype.sayAge = function () {
  console.log(this.age);
};
