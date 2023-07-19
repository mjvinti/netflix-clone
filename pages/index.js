import Head from "next/head";

import Banner from "@/components/banner/banner";
import NavBar from "@/components/navbar/navbar";
import SectionCards from "@/components/sectioncards/sectioncards";
import { getPopularVideos, getVideos } from "@/lib/videos";

import styles from "@/styles/Home.module.css";

export async function getServerSideProps() {
  const disneyVideos = await getVideos("disney trailer");
  const productivityVideos = await getVideos("productivity");
  const travelVideos = await getVideos("travel");
  const popularVideos = await getPopularVideos();

  return {
    props: { disneyVideos, popularVideos, productivityVideos, travelVideos },
  };
}

export default function Home({
  disneyVideos,
  popularVideos,
  productivityVideos,
  travelVideos,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <NavBar username="ankita@ank.com" />
        <Banner
          imgUrl="/static/clifford.webp"
          subTitle="A Very Cute Dog"
          title="Clifford the Red Dog"
        />
        <div className={styles.sectionWrapper}>
          <SectionCards size="large" title="Disney" videos={disneyVideos} />
          <SectionCards size="small" title="Travel" videos={travelVideos} />
          <SectionCards
            size="medium"
            title="Productivity"
            videos={productivityVideos}
          />
          <SectionCards size="small" title="Popular" videos={popularVideos} />
        </div>
      </div>
    </div>
  );
}
