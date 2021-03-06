/**
 * 实现一个带并发限制的异步调度器Scheduler，
 * 保证同时运行的任务最多有两个
 */

class Scheduler {
  constructor() {
    this.taskQueue = [];
    this.counter = 0;
    this.limit = 2;
  }
  add(promiseCreator) {
    return new Promise(resolve => {
      promiseCreator.resolve = resolve;
      if (this.counter < this.limit) {
        this.run(promiseCreator);
      } else {
        this.taskQueue.push(promiseCreator);
      }
    });
  }
  run(promiseCreator) {
    this.counter++;
    promiseCreator().then(() => {
      promiseCreator.resolve();
      this.counter--;
      if (this.taskQueue.length > 0) {
        this.run(this.taskQueue.shift());
      }
    });
  }
}

const timeout = time => new Promise(resolve => setTimeout(resolve, time));
const scheduler = new Scheduler();
const addTask = (time, order) =>
  scheduler.add(() => timeout(time)).then(() => console.log(order));

// test
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");

/**
 * output: 2 3 1 4
 * 一开始，1、2两个任务进队列
 * 500ms时，2完成，输出2
 * 任务3进队列
 * 800ms时，3完成，输出3
 * 任务4进队列
 * 1000ms时，1完成，输出1
 * 1200ms时，4完成，输出4
 */
