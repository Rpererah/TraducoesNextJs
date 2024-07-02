import { useEffect } from "react";
import { getCookie, setCookie } from "cookies-next";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { i18nConf } from "@/i18n/config";
import { CookiesKey } from "@/enums/cookieKey";

export function useSetLanguageCookie() {
  const { lang } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    const pathname = router.pathname;
    const langCookie = getCookie(CookiesKey.Lang);

    if (!lang || !langCookie) {
      return;
    }

    let newLanguage = lang;

    const urlLocale = i18nConf.locales.find(
      (locale) => pathname.includes(`/${locale}/`) || pathname === `/${locale}`
    );

    if (urlLocale && langCookie !== urlLocale) {
      newLanguage = urlLocale;
    }

    setCookie(CookiesKey.Lang, newLanguage, {
      sameSite: "strict",
      maxAge: 200000,
    });
    setCookie("NEXT_LOCALE", newLanguage);
  }, [lang, router.pathname]);
}
