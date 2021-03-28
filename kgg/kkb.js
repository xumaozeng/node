// 封装
const koa = require("koa");
const { initRouter, initController, initService } = require("./kkb-loader");

class kkb {
  constructor(conf) {
    this.$app = new koa(conf);
    this.$service = initService();
    this.$ctrl = initController(this); // 先初始化控制器，路有对它有依赖
    this.$router = initRouter(this); // 将kkb实例传进去
    this.$app.use(this.$router.routes());
  }

  start(port) {
    this.$app.listen(port, () => {
      console.log("KKB start at" + port);
    });
  }
}

module.exports = kkb;
