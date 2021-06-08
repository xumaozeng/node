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
dec(Log1, "print");

const dec2 = createDec("-");
dec(dec2(Log1, "print"), "print");

const log1 = new Log1();
log1.print("123");
