import { useRouter } from "next/router";

const useLocaleNavigation = () => {
  const router = useRouter();

  const { pathname, locale } = router;
  const changeLocale = async (newLocale: string) => {
    if (newLocale === locale) {
      return;
    }

    let newUrl = `/${newLocale}`;

    const currentPath = pathname.replace(/^\/[a-z]{2}\b/, "");

    if (currentPath) {
      newUrl += `/${currentPath}`;
    }

    try {
      await router.push(newUrl);
    } catch (error) {
      console.error("Erro ao navegar para nova URL:", error);
    }
  };

  return changeLocale;
};
export default useLocaleNavigation;
