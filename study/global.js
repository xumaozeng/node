/**
 * node中全局变量是global
 */

var a = 30;
b = 20;

function print() {
  console.log(this.a);
  console.log(this.b);
}

print();

console.log(arguments.callee + "");
