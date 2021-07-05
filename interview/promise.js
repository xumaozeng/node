/**
 * promise的一些API实现
 */

Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason =>
      P.resolve(callback()).then(() => {
        throw reason;
      })
  );
};

Promise.resolve = function (value) {
  return new Promise(resolve => resolve(value));
};

Promise.reject = function (error) {
  return new Promise((resolve, reject) => reject(error));
};

Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    let finish = 0;
    for (const [i, p] of promises.entries()) {
      resolve(p)
        .then(res => {
          result[i] = res;
          finish++;
          if (finish === promises.length) resolve(result);
        })
        .catch(err => reject(err));
    }
  });
};

Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      resolve(promise)
        .then(res => resolve(res))
        .catch(err => reject(err));
    }
  });
};

Promise.allSettled = function (promises) {
  return new Promise(resolve => {
    const result = [];
    for (const promise of promises) {
      Promise.resolve(promise)
        .then(res => result.push({ status: "fulfilled", value: res }))
        .catch(err => result.push({ status: "rejected", reason: err }))
        .finally(() => {
          if (result.length === promises.length) resolve(result);
        });
    }
  });
};
