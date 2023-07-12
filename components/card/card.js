import Image from "next/image";

import styles from "./card.module.css";

const Card = ({ imgUrl, size }) => {
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  return (
    <div className={styles.container}>
      <div className={classMap[size]}>
        <Image alt="image" className={styles.cardImg} fill src={imgUrl} />
      </div>
    </div>
  );
};

export default Card;
