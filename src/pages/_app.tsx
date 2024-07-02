import { useSetLanguageCookie } from "@/hooks/useSetLanguageCookie";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  useSetLanguageCookie();
  return <Component {...pageProps} />;
}

export default App;
