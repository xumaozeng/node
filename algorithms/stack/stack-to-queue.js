/**
 * 两个栈实现一个队列
 * 栈：后进先出
 * 队列：先进先出
 * enqueue,dequeue,head方法
 */

const Stack = require("./myStack");

function StackQueue() {
  const stack1 = new Stack.Stack();
  const stack2 = new Stack.Stack();

  // 入队
  this.enqueue = function (item) {
    stack1.push(item);
  };

  // 返回队头的元素
  this.head = function () {
    if (stack2.isEmpty()) {
      while (stack1.size() > 0) {
        stack2.push(stack1.pop());
      }
    }
    return stack2.top();
  };

  // 出队
  this.dequeue = function () {
    if (stack2.isEmpty()) {
      while (stack1.size() > 0) {
        stack2.push(stack1.pop());
      }
    }
    return stack2.pop();
  };
}

// test
const stack_queue = new StackQueue();

stack_queue.enqueue(1);
stack_queue.enqueue(2);
stack_queue.enqueue(3);
console.log(stack_queue.head());
console.log(stack_queue.dequeue());
stack_queue.enqueue(23);
console.log(stack_queue.head());
