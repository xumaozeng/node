// ts中的装饰器语法

function decorate(str) {
  return function (target, property, descriptor) {
    var oldValue = descriptor.value; // 指代print
    descriptor.value = msg => {
      msg = `${str}${msg}${str}`;
      return oldValue.apply(null, [msg]);
    };
    return descriptor;
  };
}

class Log {
  @decorate("=") // anotation 注解
  @decorate("*")
  print(msg) {
    console.log(msg);
  }
}

const log = new Log();
log.print("123");
