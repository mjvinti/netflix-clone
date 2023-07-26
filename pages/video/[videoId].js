import { useRouter } from "next/router";
import Modal from "react-modal";

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
      >
        <h1>hello there</h1>
      </Modal>
    </div>
  );
};

export default Video;
