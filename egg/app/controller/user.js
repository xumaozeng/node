"use strict";

const { Controller } = require("egg");

class UserController extends Controller {
  async index() {
    this.ctx.body = [{ name: "fangfang" }, { name: "xiaoxu" }];
  }
}

module.exports = UserController;
