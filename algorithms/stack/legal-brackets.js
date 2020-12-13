/**
 * 合法的括号
 * sdf(ds(ew(we)rw)rwqq)qwewe合法
 * (sd(qwqw)sd(sd))合法
 * ()()sd()(sd()fw))(不合法
 */
Stack = require("./myStack");

function legalBrackets(str) {
  // 定义一个栈结构
  var stack = new Stack.Stack();
  for (var i = 0; i < str.length; i++) {
    // 遇到'('入栈;
    var item = str[i];
    if (item === "(") {
      stack.push(item);
    } else if (item === ")") {
      // 遇到')'出栈
      if (stack.isEmpty()) {
        // 栈为空，说明没有左括号，返回false
        return false;
      } else {
        // 弹出栈顶的元素
        stack.pop();
      }
    }
  }
  // 若栈不为空，则说明没有右括号，返回false
  return stack.size() === 0;
}

console.log(legalBrackets("sdf(ds(ew(we)rw)rwqq)qwewe"));
console.log(legalBrackets("()()sd()(sd()fw))("));
