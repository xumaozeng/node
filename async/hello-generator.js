function* func() {
  //   console.log("one");
  yield "1";
  //   console.log("two");
  yield "2";
  //   console.log("three");
  yield "3";
}

const f = func();
/* console.log("next:", f.next());
console.log("next:", f.next());
console.log("next:", f.next());
console.log("next:", f.next()); */

// 或者通过迭代器
for (const item of f) {
  //   console.log(`${key}:${value}`);
  console.log(item);
}
