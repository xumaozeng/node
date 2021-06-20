/**
 * 发布订阅模式：EventEmitter
 */

class EventEmitter {
  constructor() {
    // 事件对象，存放订阅的名字和事件
    this.events = {};
  }

  // 订阅事件的方法
  on(eventName, callback) {
    if (!this.events[eventName]) {
      // 一个名字可以订阅多个事件函数
      this.events[eventName] = [callback];
    } else {
      // 存在则push保存数组
      this.events[eventName].push(callback);
    }
  }

  // 触发事件的方法
  emit(eventName, ...args) {
    // 遍历执行所有订阅的事件
    this.events[eventName] &&
      this.events[eventName].forEach(fn => fn.apply(this, args));
  }

  // 移除订阅事件
  remove(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        fn => fn !== callback
      );
    }
  }

  // 只执行一次订阅事件，然后移除
  once(eventName, callback) {
    const fn = (...args) => {
      callback.apply(this, args);
      this.remove(eventName, fn);
    };
    this.on(eventName, fn);
  }
}

//test

const eventEmitter = new EventEmitter();
const handle = (...args) => console.log(args);

eventEmitter.on("click", handle);
eventEmitter.emit("click", 100, 200);

eventEmitter.remove("click", handle);
eventEmitter.emit("click", "xiaoxu", "fangfang");

eventEmitter.once("dbclick", function (...args) {
  console.log(args);
});

eventEmitter.emit("dbclick", "once");
eventEmitter.emit("dbclick", "again");
