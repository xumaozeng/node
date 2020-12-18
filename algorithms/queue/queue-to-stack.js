/**
 * 用两个队列实现栈：
 * 队列：先进先出
 * 栈：后进先出
 * push,pop,top三个方法
 */

const Queue = require("./myQueue");
function QueueStack() {
  // 定义两个队列
  const queue1 = new Queue.Queue();
  const queue2 = new Queue.Queue();
  // 定义两个指针变量，分别指向存放数据的和空队列的
  let data_queue = null;
  let empty_queue = null;

  // 初始化数据队列和空队列
  const init_queue = function () {
    if (queue1.isEmpty() && queue2.isEmpty()) {
      data_queue = queue1;
      empty_queue = queue2;
    } else if (queue1.isEmpty()) {
      data_queue = queue2;
      empty_queue = queue1;
    } else {
      data_queue = queue1;
      empty_queue = queue2;
    }
  };

  // 入栈
  this.push = function (item) {
    init_queue();
    data_queue.enqueue(item);
  };

  // 返回栈顶的元素
  this.top = function () {
    init_queue();
    return data_queue.tail(); // 返回队列的尾部元素
  };

  // 出栈
  this.pop = function () {
    init_queue();
    // 删除并返回数据队列的元素的尾部
    while (data_queue.size() > 1) {
      empty_queue.enqueue(data_queue.dequeue());
    }
    return data_queue.dequeue();
  };
}

// test
const queue_stack = new QueueStack();
queue_stack.push(1);
queue_stack.push(2);
queue_stack.push(4);

console.log(queue_stack.top()); //sy-log
console.log(queue_stack.pop()); //sy-log
console.log(queue_stack.top());
