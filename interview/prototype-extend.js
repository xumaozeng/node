/**
 * 原型继承
 */

function Parent(value) {
  this.value = value;
}

Parent.prototype.getValue = function () {
  console.log(this.value);
};

function Child(value) {
  Parent.call(this, value);
}

Child.prototype = new Parent();

const child = new Child("child");
child.getValue();
child instanceof Parent;
