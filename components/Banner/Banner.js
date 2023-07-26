import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./banner.module.css";

const Banner = ({ imgUrl, subTitle, title, videoId }) => {
  const { push } = useRouter();

  const handleOnPlay = () => push(`video/${videoId}`);

  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.series}>S E R I E S</p>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subTitle}>{subTitle}</h3>
          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon} onClick={handleOnPlay}>
              <Image
                alt="play icon"
                height={32}
                src="/static/play_arrow.svg"
                width={32}
              />
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
    </div>
  );
};

export default Banner;
