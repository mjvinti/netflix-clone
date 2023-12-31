import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Roboto_Slab } from "@next/font/google";

import Loading from "@/components/loading/loading";
import { magic } from "@/lib/magicClient";

import "@/styles/globals.css";
import Layout from "@/components/layout/layout";

const roboto = Roboto_Slab({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const { events, push } = useRouter();

  useEffect(() => {
    const isUserLoggedIn = async () => {
      const isLoggedIn = await magic.user.isLoggedIn();
      push(isLoggedIn ? "/" : "/login");
    };

    isUserLoggedIn();
  }, []);

  const handleComplete = () => setIsLoading(false);

  useEffect(() => {
    events.on("routeChangeComplete", handleComplete);
    events.on("routeChangeError", handleComplete);

    return () => {
      events.off("routeChangeComplete", handleComplete);
      events.off("routeChangeError", handleComplete);
    };
  }, [events]);

  return (
    <main className={roboto.className}>
      {isLoading ? (
        <Loading />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </main>
  );
}
