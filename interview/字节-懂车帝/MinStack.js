/**
 * 最小栈
 * - push(x) 将元素x推入栈中
 * - pop() 删除栈顶的元素
 * - top() 获取栈顶的元素
 * - getMin() 检索栈中最小的元素
 */

function MinStack() {
  this.stack = [];
  this.min = [Infinity];
}

// push
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  this.min.push(Math.min(this.min[this.min.length - 1], val));
};

// pop
MinStack.prototype.pop = function () {
  if (this.min.length > 0) {
    this.stack.pop();
    this.min.pop();
  }
};

// top
MinStack.prototype.top = function () {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1];
  }
};

// getMin
MinStack.prototype.getMin = function () {
  if (this.min.length > 0) {
    return this.min[this.min.length - 1];
  }
};

// test
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // -3
minStack.pop();
console.log(minStack.top()); // 0
console.log(minStack.getMin()); // -2
