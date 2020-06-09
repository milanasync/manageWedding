const globalService = require("./global.service");

class GlobalController {
  static getLanguages = async (req, res) => {
    const response = await globalService.getLanguages();
    return res.send(response);
  };
}

module.exports = GlobalController;
