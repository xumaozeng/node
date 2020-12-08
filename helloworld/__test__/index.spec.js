test("测试Hello World", () => {
  const ret = require("../index");
  //   console.log("helloworld", helloworld); //sy-log
  expect(ret).toBe("Hello World");
});
