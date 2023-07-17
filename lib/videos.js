export const getVideos = async () => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=disney%20trailer&type=video&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await response.json();
  return data.items;
};
