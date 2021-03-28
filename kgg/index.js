// 入口文件

/* const app = new (require("koa"))();
const { initRouter } = require("./kkb-loader");

app.use(initRouter().routes());
app.listen(3000); */

// 使用封装接口
const kkb = require("./kkb");
const app = new kkb();

app.start(3000);
