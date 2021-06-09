// 防抖：触发高频事件后，n秒内只执行一次函数，如果在这n秒内再次触发事件，则重新计时

function debounce(fn, delay = 500) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
