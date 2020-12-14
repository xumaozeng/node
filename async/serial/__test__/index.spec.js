const {
  callback,
  promise,
  generator,
  asyncAwait,
  event
} = require("../../index");

/* test("callback", done => {
  callback();
  // 延迟1秒
  setTimeout(done, 1000);
}); */

/* test("promise", done => {
  promise();
  // 延迟1秒
  setTimeout(done, 1000);
}); */

/* test("generator", done => {
  generator();
  // 延迟1秒
  setTimeout(done, 1000);
}); */

/* test("asyncAwait", done => {
  asyncAwait();
  // 延迟1秒
  setTimeout(done, 1000);
}); */

test("event", done => {
  event();
  // 延迟1秒
  setTimeout(done, 1000);
});
