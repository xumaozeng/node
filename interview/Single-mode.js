/**
 * 实现单例模式，一个类只有一个实例，并提供一个全局方法
 */

class SingleMode {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }
}

const ProxyMode = function () {
  let instance = null;
  return function (name) {
    if (!instance) {
      instance = new SingleMode(name);
    }
    return instance;
  };
};

// test
const test = ProxyMode();
const instance1 = test("a");
const instance2 = test("b");

instance1.getName();
instance2.getName();
