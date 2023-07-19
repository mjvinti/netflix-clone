export const getVideos = async (searchQuery) => {
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&type=video&key=${process.env.YOUTUBE_API_KEY}`
    );
    const data = await response.json();

    if (data.error) {
      console.error("Youtube API error", data.error);
      return [];
    }

    return data.items.map((item) => formatVideo(item));
  } catch (err) {
    console.error("Something went wrong with the video library", err);
    return [];
  }
};

const formatVideo = (video) => ({
  id: video.id.videoId || video.id,
  imgUrl: video.snippet.thumbnails.high.url,
  title: video.snippet.title,
});
