const { EventEmitter } = require("events");
module.exports = class Connection {
  // ##BEGIN## 代码已加密
  constructor() {
    this.emitter = new EventEmitter();
    this.fn = undefined;
  }
  onConn(fn) {
    this.fn = fn.name;
    this.emitter.on(fn.name, msg => {
      console.log(msg);
    });
  }
  connection(message) {
    this.emitter.emit(this.fn, message);
  }
  // ##END##
};
