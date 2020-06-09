const languageService = require("../../services/languages.service");

class GlobalServices {
  static getLanguages = async () => {
    const languages = await languageService.getLanguages();
    return languages;
  };
}

module.exports = GlobalServices;
