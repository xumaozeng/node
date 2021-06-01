/**
 * 实现Promise.retry，成功后resolve结果，失败后重试，
 * 尝试超过一定次数后才真正的reject
 */

Promise.retry1 = function (promiseFn, times) {
  return new Promise(async (resolve, reject) => {
    while (times--) {
      console.log("retry1-", times);
      try {
        const ret = await promiseFn();
        resolve(ret);
        break;
      } catch (error) {
        if (!times) reject(error);
      }
    }
  });
};

Promise.retry2 = function (promiseFn, times, delay) {
  return new Promise((resolve, reject) => {
    const retry = function () {
      promiseFn()
        .then(resolve)
        .catch(err => {
          if (times === 0) {
            reject(err);
          } else {
            times--;
            console.log("retry2-", times);
            setTimeout(retry, delay);
          }
        });
    };
    retry();
  });
};

// test
function test() {
  const n = Math.random();
  return new Promise((resolve, reject) => {
    setTimeout(() => (n > 0.7 ? resolve(n) : reject("err")), 1000);
  });
}

Promise.retry2(test, 3)
  .then(res => console.log(res))
  .catch(err => console.log(err));
