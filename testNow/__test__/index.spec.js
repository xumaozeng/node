test("测试生成文件名方法", () => {
  const src = new (require("../index"))();
  const ret = src.getTestFileName("/abc/class.js");
  console.log("filename:", ret);
  expect(ret).toBe("/abc/__test__/class.spec.js");
});
