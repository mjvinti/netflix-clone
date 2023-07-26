import { useRouter } from "next/router";

const Video = () => {
  const {
    query: { videoId },
  } = useRouter();

  return <div>Video {videoId}</div>;
};

export default Video;
