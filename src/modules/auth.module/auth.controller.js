const authService = require("./auth.service");

class AuthController {
  static async doLogin(req, res) {
    const user = await authService.doLogin();
    res.send(user);
  }
}

module.exports = AuthController;
