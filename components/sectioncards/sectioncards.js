import Link from "next/link";

import Card from "../card/card";

import styles from "./sectioncards.module.css";

const SectionCards = ({ size, title, videos = [] }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, i) => (
          <Link href={`video/${video.id}`} key={video.id}>
            <Card id={i} imgUrl={video.imgUrl} size={size} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SectionCards;
