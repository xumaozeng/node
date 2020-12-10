const path = require("path");
module.exports = class TestNow {
  /**
   * 生成文件名方法
   * @param {*} filename
   */
  getTestFileName(filename) {
    const dirName = path.dirname(filename);
    const baseName = path.basename(filename);
    const extName = path.extname(filename);
    const testName = baseName.replace(extName, `.spec${extName}`);
    return path.format({
      root: dirName + "/__test__/",
      base: testName
    });
  }

  /**
   * 生成测试代码
   */
  getTestSource(methodName, classFile, isClass = false) {
    console.log("getTestSource:", methodName);
    return `
  test('${"TEST" + methodName}', ()=>{
    const ${isClass ? "{" + methodName + "}" : methodName} = require('${"../" + classFile}')
    const ret = ${methodName}()
    // expect(ret)
    //  .toBe('test return')
    })`;
  }
};
