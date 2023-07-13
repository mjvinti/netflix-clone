import Card from "../card/card";

import styles from "./sectioncards.module.css";

const SectionCards = ({ title }) => {
  const cards = Array.from(Array(10)).map((_, i) => (
    <Card id={i} imgUrl="/static/clifford.webp" key={i} size="large" />
  ));

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>{cards.map((card) => card)}</div>
    </section>
  );
};

export default SectionCards;
