// 节流，高频事件触发后，在n秒内只执行一次，相当于稀释了函数的执行频率

function throttle(fn, delay = 500) {
  // 第一次执行了
  let last = 0;
  return (...args) => {
    let now = Date.now();
    if (now - last > delay) {
      fn.apply(this, args);
      last = now;
    }
  };
}
