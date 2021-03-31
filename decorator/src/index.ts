class Log1 {
  print(msg) {
    console.log(msg);
  }
}

const createDec = str => (target, property) => {
  const old = target.prototype[property];
  target.prototype[property] = msg => {
    msg = `${str}${str}${msg}${str}${str}`;
    old(msg);
  };
  return target;
};

const dec = createDec("*");
dec(Log, "print");

const dec2 = createDec("-");
dec(dec2(Log, "print"), "print");

const log1 = new Log();
log.print("123");
