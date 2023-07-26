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
    <div>
      Video {videoId}
      <Modal
        contentLabel="Watch the Video"
        isOpen={true}
        onRequestClose={() => back()}
        overlayClassName={styles.overlay}
      >
        <h1>Modal Body</h1>
      </Modal>
    </div>
  );
};

export default Video;
