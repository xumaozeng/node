/**
 * 实现一个有min方法的栈，即返回栈中最小的元素
 */

var Stack = require("./myStack");

function minStack() {
  var data_stack = new Stack.Stack(); // 数据栈
  var min_stack = new Stack.Stack(); // 最小栈

  // 压栈
  this.push = function (item) {
    data_stack.push(item);
    if (min_stack.isEmpty() || item < min_stack.top()) {
      // 最小栈为空或者当前元素小于栈顶元素，入栈
      min_stack.push(item);
    } else {
      // 否则将栈顶元素再放入一遍
      min_stack.push(min_stack.top());
    }
  };

  // 出栈
  this.pop = function () {
    data_stack.pop();
    min_stack.pop();
  };

  // min方法
  this.min = function () {
    return min_stack.top();
  };
}

var minStack = new minStack();

minStack.push(3);
minStack.push(5);
minStack.push(7);
console.log(minStack.min());
minStack.push(2);
console.log(minStack.min());
