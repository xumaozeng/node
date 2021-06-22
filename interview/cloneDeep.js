/**
 * 实现一个深克隆，要求处理循环引用和Symbol
 */

function cloneDeep(source, hash = new WeakMap()) {
  if (!isObject(source)) return source;
  // 循环引用
  if (hash.has(source)) return hash.get(source);

  const target = Array.isArray(source) ? [] : {};
  hash.set(source, target);

  Reflect.ownKeys(source).forEach(key => {
    if (isObject(source[key])) {
      target[key] = cloneDeep(source[key], hash);
    } else {
      target[key] = source[key];
    }
  });

  return target;
}

// 判断是否是对象
function isObject(source) {
  return Object.prototype.toString.call(source) === "[object Object]";
}

// test

const sym = Symbol("a");

const a = {
  name: "xiaoxu",
  book: {
    title: "红宝书",
    price: 25
  },
  a1: undefined,
  a2: [1, 2, 3],
  a3: new Date(),
  a4: new RegExp(),
  [sym]: "localSymbol"
};

// 循环引用
a.circleRef = a;

const b = cloneDeep(a);
console.log(b);
