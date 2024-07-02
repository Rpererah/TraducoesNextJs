import nextTranslate from "next-translate-plugin";

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "es", "en"],
  },
};

export default nextTranslate(nextConfig);
