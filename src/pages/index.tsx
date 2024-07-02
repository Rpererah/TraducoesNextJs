import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import useLocaleNavigation from "@/hooks/useLocaleNavigation";

export default function Home() {
  const { t } = useTranslation("common");

  const changeLocale = useLocaleNavigation();

  return (
    <div>
      <p>{t("welcome")}</p>

      <button onClick={() => changeLocale("en")}>{t("locale_en")}</button>
      <button onClick={() => changeLocale("pt")}>{t("locale_pt")}</button>
      <button onClick={() => changeLocale("es")}>{t("locale_es")}</button>
      <br />
      <Link href="/teste">{t("test_route")}</Link>
    </div>
  );
}
