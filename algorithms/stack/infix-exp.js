/**
 * 用栈的结构，把中序表达式转后序表达式
 */

var Stack = require("./myStack");
// 定义运算符的优先级
var priority_map = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2
};
function infix_to_postfix(exp) {
  var stack = new Stack.Stack();
  var postfix_lst = []; // 定义后缀数组
  for (var i = 0; i < exp.length; i++) {
    var item = exp[i];
    // 如果是数字直接放到postfix_lst中
    if (!isNaN(item)) {
      postfix_lst.push(item);
    } else if (item === "(") {
      // 遇到左括号入栈
      stack.push(item);
    } else if (item === ")") {
      // 遇到右括号，把栈顶元素弹出，直到遇到左括号
      while (stack.top() !== "(") {
        postfix_lst.push(stack.pop());
      }
      stack.pop(); // 左括号出栈
    } else {
      // 遇到运算符，把栈顶的运算符弹出，直到栈顶的运算符优先级小于当前运算符
      while (
        !stack.isEmpty() &&
        ["+", "-", "*", "/"].includes(stack.pop()) &&
        priority_map[stack.top()] >= priority_map[item]
      ) {
        // 把弹出的运算符加入到postfix_lst中
        postfix_lst.push(stack.pop());
      }
      // 当前的运算符入栈
      stack.push(item);
    }
  }
  // for循环结束后，栈里可能还有元素，都弹出放到postfix_lst中
  while (!stack.isEmpty()) {
    postfix_lst.push(stack.pop());
  }
  return postfix_lst;
}

console.log(infix_to_postfix(["12", "+", "3"]));
