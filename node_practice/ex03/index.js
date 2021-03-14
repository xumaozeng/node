const fs = require("fs");
module.exports.parser = path => {
  const readStream = fs.createReadStream(path);
  let reqData = [];
  let size = 0;
  return new Promise(resolve => {
    // ##BEGIN##
    readStream.on("data", data => {
      reqData.push(data);
    });
    readStream.on("end", () => {
      let res = JSON.parse(reqData.toString());
      resolve(res);
    });
    // ##END##
  });
};
