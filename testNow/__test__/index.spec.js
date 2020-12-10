/* test("测试生成文件名方法", () => {
  const src = new (require("../index"))();
  const ret = src.getTestFileName("/abc/class.js");
  console.log("filename:", ret);
  expect(ret).toBe("/abc/__test__/class.spec.js");
});
 */

test("测试代码生成", () => {
  const src = new (require("../index"))();
  const ret = src.getTestSource("fun", "class");
  console.log("ret", ret);
  expect(ret).toBe(`
  test('TESTfun', ()=>{
    const fun = require('../class')
    const ret = fun()
    // expect(ret)
    //  .toBe('test return')
    })`);
});
