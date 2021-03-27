const fs = require("fs");
module.exports.createLoader = config => {
  const loader = (scanFolder, cb) => {
    const files = fs.readdirSync(scanFolder);
    files.forEach(filename => {
      filename = filename.replace(".js", "");
      const file = require(scanFolder + "/" + filename);
      cb(filename, file);
    });
  };

  return {
    initFunction: scanFolder => {
      const ret = {};
      // ##BEGIN## 代码已加密
      // 方法1
      /* const files = fs.readdirSync(scanFolder);
      files.forEach(filename => {
        filename = filename.replace(".js", "");
        ret[`${filename}`] = require(scanFolder + "/" + filename)(config);
      }); */
      // 方法2：使用loader
      loader(scanFolder, function (filename, file) {
        ret[`${filename}`] = file(config);
      });
      // ##END##
      return ret;
    }
  };
};
