"use strict";

const { Controller } = require("egg");

class LoginController extends Controller {
  async index() {
    this.ctx.body = "login page";
  }
}

module.exports = LoginController;
