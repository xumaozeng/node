/**
 * 计算逆波兰表达式-后缀表达式
 * 例如：(a+b)*(c+d) = ab+cd+*
 * 思路：
 * 1、如果不是遇到‘+-*\’中一个，则代表是数字就压入栈
 * 2、遇到算法符号就从栈中依次取出两个元素，运算后在压入栈中
 */
var Stack = require("./myStack");

function calcExp(exp) {
  var stack = new Stack.Stack(); // 定义一个栈
  for (var i = 0; i < exp.length; i++) {
    // 遍历exp数组
    var item = exp[i];
    if (["+", "-", "*", "/"].includes(item)) {
      // 如果是运算符，则依次从栈中取出两个元素，计算后在压入栈中
      var value1 = stack.pop();
      var value2 = stack.pop();
      var exp_str = value2 + item + value1; // 拼成表达式
      var ret = parseInt(eval(exp_str)); // eval计算表达式的值
      // 再将ret压入栈中
      stack.push(ret.toString());
    } else {
      // 如果是数字，则压入栈中
      stack.push(item);
    }
  }
  return stack.pop();
}

console.log(calcExp(["4", "13", "5", "/", "+"]));
