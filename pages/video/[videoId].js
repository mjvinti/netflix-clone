import { useRouter } from "next/router";
import clsx from "classnames";
import Modal from "react-modal";

import { getVideoById } from "@/lib/videos";

import styles from "@/styles/Video.module.css";

Modal.setAppElement("#__next");

export async function getStaticProps() {
  const videoArr = await getVideoById("4zH5iYM4wJo");

  return {
    props: { video: videoArr.length ? videoArr[0] : {} },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const listOfVideos = ["mYfJxlgR2jw", "4zH5iYM4wJo", "KCPEHsAViiQ"];
  const paths = listOfVideos.map((videoId) => ({
    params: { videoId },
  }));

  return { paths, fallback: "blocking" };
}

const Video = ({ video }) => {
  const {
    back,
    query: { videoId },
  } = useRouter();

  const { title, publishTime, description, channelTitle, viewCount } = video;

  return (
    <div className={styles.container}>
      <Modal
        className={styles.modal}
        contentLabel="Watch the Video"
        isOpen={true}
        onRequestClose={() => back()}
        overlayClassName={styles.overlay}
      >
        <iframe
          className={styles.videoPlayer}
          frameBorder="0"
          height="360"
          id="ytplayer"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
          type="text/html"
          width="100%"
        ></iframe>
        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.publishTime}>{publishTime}</p>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.col2}>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>Cast: </span>
                <span className={styles.channelTitle}>{channelTitle}</span>
              </p>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>View Count: </span>
                <span className={styles.channelTitle}>{viewCount}</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Video;
