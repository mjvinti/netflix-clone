import Head from "next/head";

import Banner from "@/components/banner/banner";
import Card from "@/components/card/card";
import NavBar from "@/components/navbar/navbar";

import styles from "@/styles/Home.module.css";

export default function Home() {
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
      <Card imgUrl="/static/clifford.webp" size="large" />
      <Card imgUrl="/static/clifford.webp" size="medium" />
      <Card imgUrl="/static/clifford.webp" size="small" />
    </div>
  );
}
