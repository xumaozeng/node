/**
 * 打印杨辉三角
 */

const Queue = require("./myQueue");
function print_yanghui(n) {
  const queue = new Queue.Queue();
  queue.enqueue(1);
  // 第一层循环控制打印几层
  for (let i = 1; i <= n; i++) {
    let line = "";
    let pre = 0;
    // 第二层循环控制打印第i层
    for (let j = 0; j < i; j++) {
      const item = queue.dequeue();
      line += item + " ";
      let value = item + pre;
      pre = item;
      queue.enqueue(value);
    }
    // 每一层最后一个数字是1
    queue.enqueue(1);
    console.log(line);
  }
}

// test
print_yanghui(10);
