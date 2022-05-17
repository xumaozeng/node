/**
 * Promise的A+规范源码
 * new MyPromise(executor)
 * executor:(resolve,reject)=>{} 其中resolve,reject是实参，形参是定义函数的参数，实参是调用函数的参数
 */

const isFunction = param => typeof param === "function";
const isObject = param => typeof param === "object" && param !== null;

const PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected";
class MyPromise {
  // 先定义三个状态，一旦改变不可逆
  constructor(executor) {
    this.state = PENDING;
    this.value = undefined;
    this.reason = undefined;

    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = value => {
      // 判断value是否是thenable对象
      if (isObject(value)) {
        try {
          const then = value.then;
          if (isFunction(then)) {
            return then.call(value, resolve, reject);
          }
        } catch (err) {
          return reject(err);
        }
      }

      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.value = value;
        this.onFulfilledCallbacks.forEach(fn => fn());
      }
    };
    const reject = reason => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  // then方法接收两个参数onFulfilled,onRejected函数
  then(onFulfilled, onRejected) {
    onFulfilled = isFunction(onFulfilled) ? onFulfilled : data => data;
    onRejected = isFunction(onRejected)
      ? onRejected
      : err => {
          throw err;
        };

    const p = new MyPromise((resolve, reject) => {
      let x;
      if (this.state === FULFILLED) {
        queueMicrotask(() => {
          try {
            x = onFulfilled(this.value);
            resolvePromise(p, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
      }
      if (this.state === REJECTED) {
        queueMicrotask(() => {
          try {
            x = onRejected(this.reason);
            resolvePromise(p, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
      }
      if (this.state === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              x = onFulfilled(this.value);
              resolvePromise(p, x, resolve, reject);
            } catch (err) {
              reject(err);
            }
          });
        });
        this.onRejectedCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              x = onRejected(this.reason);
              resolvePromise(p, x, resolve, reject);
            } catch (err) {
              reject(err);
            }
          });
        });
      }
    });
    return p;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onFinally) {
    return this.then(
      value => MyPromise.resolve(onFinally()).then(() => value),
      error =>
        MyPromise.resolve(onFinally()).then(() => {
          throw error;
        })
    );
  }
}

MyPromise.resolve = function (value) {
  if (value instanceof MyPromise) {
    return value;
  }
  return new MyPromise((resolve, reject) => {
    if (isObject(value) && isFunction(value.then)) {
      queueMicrotask(() => {
        value.then(resolve, reject);
      });
    } else {
      resolve(value);
    }
  });
};

MyPromise.reject = function (reason) {
  return new MyPromise((resolve, reject) => {
    reject(reason);
  });
};

MyPromise.all = function (promises) {
  return new MyPromise((resolve, reject) => {
    if (
      !promises ||
      !promises[Symbol.iterator] ||
      typeof promises[Symbol.iterator] !== "function"
    ) {
      reject(new TypeError("promises不是可迭代对象"));
    } else {
      promises = Array.from(promises);
      const result = [];
      let count = 0;
      if (!promises.length) {
        resolve(result);
      } else {
        for (let i = 0; i < promises.length; i++) {
          MyPromise.resolve(promises[i])
            .then(value => {
              result[i] = value;
              count++;
              if (count === promises.length) {
                resolve(result);
              }
            })
            .catch(err => {
              reject(err);
            });
        }
      }
    }
  });
};

function resolvePromise(p, x, resolve, reject) {
  let called = false;
  if (p === x) {
    reject(new TypeError("引用错误"));
  }

  if (isObject(x) || isFunction(x)) {
    try {
      const then = x.then;
      if (isFunction(then)) {
        then.call(
          x,
          y => {
            if (called) return;
            called = true;
            resolvePromise(p, y, resolve, reject);
          },
          r => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        if (called) return;
        called = true;
        resolve(x);
      }
    } catch (err) {
      if (called) return;
      called = true;
      reject(err);
    }
  } else {
    resolve(x);
  }
}

// test
const p1 = new MyPromise((resolve, reject) => {
  resolve(
    new MyPromise(resolve => {
      resolve("resolve promise");
    })
  );
});

const p2 = p1.then(
  res => {
    console.log(res);
  },
  err => {
    console.log("rejected " + err);
  }
);

/* p2.then(
  res => {
    console.log(res);
  },
  err => {
    console.log(err);
  }
); */

/* const p2 = MyPromise.resolve(2);

MyPromise.all(1)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  }); */

/* const p1 = {
  a: 1,
  then(onFulfilled, onReject) {
    onFulfilled(this.a);
  }
};

const p2 = new Promise(resolve => {
  resolve(p1);
}).then(res => {
  console.log(res);
}); */

MyPromise.defer = MyPromise.deferred = function () {
  let dfd = {};
  dfd.promise = new MyPromise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};

module.exports = MyPromise;

// promises-aplus-tests 文件名
// 测试是否符合promise A+规范
