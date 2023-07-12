import { useState } from "react";
import Image from "next/image";

import styles from "./card.module.css";

const Card = ({ imgUrl, size = "medium" }) => {
  const [imgSrc, setImgSrc] = useState(imgUrl);

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const handleOnError = () => setImgSrc("/static/clifford.webp");

  return (
    <div className={styles.container}>
      <div className={classMap[size]}>
        <Image
          alt="image"
          className={styles.cardImg}
          fill
          onError={handleOnError}
          src={imgSrc}
        />
      </div>
    </div>
  );
};

export default Card;
