class LanguageServices {
  static getLanguages = async () => {
    return [
      {
        id: 1,
        code: 'en',
        name: "English",
      },
      {
        id: 2,
        code: 'gj',
        name: "Gujarati",
      },
    ];
  };
}
module.exports = LanguageServices;
