import { useEffect } from "react";
import { useRouter } from "next/router";
import { Roboto_Slab } from "@next/font/google";

import { magic } from "@/lib/magicClient";

import "@/styles/globals.css";

const roboto = Roboto_Slab({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const { push } = useRouter();

  useEffect(() => {
    const isUserLoggedIn = async () => {
      const isLoggedIn = await magic.user.isLoggedIn();
      push(isLoggedIn ? "/" : "/login");
    };

    isUserLoggedIn();
  }, []);

  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
