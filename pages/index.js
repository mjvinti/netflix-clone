import Head from "next/head";

import Banner from "@/components/banner/banner";
import NavBar from "@/components/navbar/navbar";
import SectionCards from "@/components/sectioncards/sectioncards";
import { getVideos } from "@/lib/videos";

import styles from "@/styles/Home.module.css";

export async function getServerSideProps() {
  const fetchedVideos = await getVideos();
  const videos = fetchedVideos.map((video) => ({
    title: video.snippet.title,
    imgUrl: video.snippet.thumbnails.high.url,
    id: video.id.videoId,
  }));

  return { props: { videos } };
}

export default function Home({ videos }) {
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
        <SectionCards size="large" title="Disney" videos={videos} />
        <SectionCards size="medium" title="Disney" videos={videos} />
      </div>
    </div>
  );
}
