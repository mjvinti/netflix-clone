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
          id="ytplayer"
          type="text/html"
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
        ></iframe>
        <div>Modal Body</div>
      </Modal>
    </div>
  );
};

export default Video;
