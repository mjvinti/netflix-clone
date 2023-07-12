import Card from "../card/card";

import styles from "./sectioncards.module.css";

const SectionCards = ({ title }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
      </div>
    </section>
  );
};

export default SectionCards;
