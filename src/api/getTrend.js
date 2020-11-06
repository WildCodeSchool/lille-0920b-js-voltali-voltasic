import axios from "axios";
import mock from "./mock.json";

export const getTrend = async query => {
  try {
    const { trendData } = await axios.get(
      `https://content.googleapis.com/youtube/v3/search?q=tendance+musique+fr&part=snippet&maxResults=1&type=video&key=AIzaSyD0qqnH0XQqwZDlHrZg35xpNNhKyoqD3Pk`
    );
    return trendData.items;
  } catch (error) {
    console.log(error);
    return mock;
  }
};
