import { Roboto_Slab } from "@next/font/google";

import "@/styles/globals.css";

const roboto = Roboto_Slab({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
