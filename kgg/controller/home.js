module.exports = app => ({
  index: async () => {
    // ctx.body = "首页CTRL";
    const name = await app.$service.user.getName();
    app.ctx.body = "ctrl user" + name;
  },
  detail: () => {
    app.ctx.body = "详情CTRL";
  }
});
