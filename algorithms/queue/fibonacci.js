/**
 * 裴波纳契数列：
 * f(0)=1,f(1)=1
 * f(n)=f(n-1)+f(n-2)
 */

var Queue = require("./myQueue");

function fibonacci(n) {
  var queue = new Queue.Queue();
  queue.enqueue(1); // n=0
  queue.enqueue(1); // n=1
  // 出队的元素加上对头的元素在入队
  var index = 0;
  while (index < n - 2) {
    var del_item = queue.dequeue();
    var head_item = queue.head();
    queue.enqueue(del_item + head_item);
    index++;
  }
  return queue.tail();
}

console.log(fibonacci(8)); //sy-log
