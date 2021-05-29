/**
 * 手写async-await
 */

function asyncToGenerator(generatorFunc) {
  // 返回的是一个函数
  return function () {
    // 先调用generator函数，生成迭代器
    const gen = generatorFunc.apply(this, arguments);
    // 返回一个promise
    return new Promise((resolve, reject) => {
      // 内部定义一个step函数，用来一步一步的跨越yield阻碍
      function step(key, arg) {
        let generatorResult;
        try {
          generatorResult = gen[key](arg);
        } catch (error) {
          return reject(error);
        }
        const { value, done } = generatorResult;
        if (done) {
          return resolve(value);
        } else {
          return Promise.resolve(value).then(
            function onResolve(val) {
              step("next", val);
            },
            function onReject(err) {
              step("throw", err);
            }
          );
        }
      }
      step("next");
    });
  };
}
