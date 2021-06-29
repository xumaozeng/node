/**
 * 寄生式组合继承
 */

function inheritPrototype(subType, superType) {
  let prototype = object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
