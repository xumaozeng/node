/**
 * 手写async-await
 *实现原理是：自执行器+generator函数包装在一个函数里
 */

function async_await(args) {
  // spawn-自动执行器
  // genF是generator函数
  return function spawn(genF) {
    return new Promise(function (resolve, reject) {
      const gen = genF();
      function step(nextF) {
        let next;
        try {
          next = nextF();
        } catch (e) {
          return reject(e);
        }
        if (next.done) {
          return resolve(next.value);
        }
        Promise.resolve(next.value).then(
          function (v) {
            step(function () {
              return gen.next(v);
            });
          },
          function (e) {
            step(function () {
              return gen.throw(e);
            });
          }
        );
      }
      step(function () {
        return gen.next(undefined);
      });
    });
  };
}
