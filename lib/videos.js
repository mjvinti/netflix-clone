export const getCommonVideos = async (url) => {
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/${url}&maxResults=25&key=${process.env.YOUTUBE_API_KEY}`
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
  description: video.snippet.description,
  publishTime: video.snippet.publishedAt,
  channelTitle: video.snippet.channelTitle,
  viewCount: video.statistics ? video.statistics.viewCount : 0,
});

export const getVideos = (searchQuery) => {
  const url = `search?part=snippet&q=${searchQuery}&type=video`;
  return getCommonVideos(url);
};

export const getPopularVideos = () => {
  const url =
    "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US";
  return getCommonVideos(url);
};

export const getVideoById = (videoId) => {
  const url = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`;
  return getCommonVideos(url);
};
