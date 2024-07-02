module.exports = {
  locales: ["pt", "es", "en"],
  defaultLocale: "pt",
  loadLocaleFrom: (lang, ns) =>
    import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
  pages: {
    "*": ["common"],
  },
};
