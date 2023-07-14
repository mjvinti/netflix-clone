import Head from "next/head";

import Banner from "@/components/banner/banner";
import NavBar from "@/components/navbar/navbar";
import SectionCards from "@/components/sectioncards/sectioncards";

import styles from "@/styles/Home.module.css";

export default function Home() {
  const disneyVideos = Array.from(Array(10)).map((_, i) => ({
    imgUrl: "/static/clifford.webp",
  }));

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar username="ankita@ank.com" />
      <Banner
        imgUrl="/static/clifford.webp"
        subTitle="A Very Cute Dog"
        title="Clifford the Red Dog"
      />
      <div className={styles.sectionWrapper}>
        <SectionCards size="large" title="Disney" videos={disneyVideos} />
        <SectionCards size="medium" title="Disney" videos={disneyVideos} />
      </div>
    </div>
  );
}
