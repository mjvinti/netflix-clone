import { useRouter } from "next/router";
import Modal from "react-modal";

import styles from "@/styles/Video.module.css";

Modal.setAppElement("#__next");

const Video = () => {
  const {
    back,
    query: { videoId },
  } = useRouter();

  return (
    <div className={styles.container}>
      Video {videoId}
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
      </Modal>
    </div>
  );
};

export default Video;
