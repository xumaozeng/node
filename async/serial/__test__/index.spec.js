const { callback, promise } = require("../../index");

/* test("callback", done => {
  callback();
  // 延迟1秒
  setTimeout(done, 1000);
}); */

test("promise", done => {
  promise();
  // 延迟1秒
  setTimeout(done, 1000);
});
