const crypto = require("crypto");
const { Buffer } = require("buffer");
module.exports.createToken = token => {
  const ary = token.split(".");
  if (ary.length !== 3) {
    return;
  }

  return {
    getExp: () => {
      // ##BEGIN## 代码已加密
      const dateStr = Buffer.from(ary[1], "base64").toString("utf-8");
      const { exp } = JSON.parse(dateStr);
      return exp;
      // ##END##
    },

    verify: key => {
      const hmac = crypto
        .createHmac("SHA256", key)
        .update(ary[0] + "." + ary[1])
        .digest("base64");
      return hmac === ary[2] + "=";
    }
  };
};
