export const getVideos = async (searchQuery) => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&type=video&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await response.json();
  return data.items.map((item) => formatVideo(item));
};

const formatVideo = (video) => ({
  title: video.snippet.title,
  imgUrl: video.snippet.thumbnails.high.url,
  id: video.id.videoId,
});
