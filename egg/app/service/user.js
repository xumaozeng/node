const { Service } = require("egg");

class UserService extends Service {
  async getAll() {
    return {
      name: "user service"
    };
  }
}

module.exports = UserService;
