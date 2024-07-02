import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
export default function Teste() {
  const { t } = useTranslation("common");
  return (
    <div>
      <h1>{t("greeting")}</h1>

      <p>{t("welcome")}</p>
      <br />
      <Link href={"/"}>{t("back_route")}</Link>
    </div>
  );
}
