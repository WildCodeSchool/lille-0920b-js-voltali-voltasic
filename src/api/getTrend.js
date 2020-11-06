import axios from "axios";
import mock from "./mock.json";

export const getTrend = async () => {
  try {
    const { data } = await axios.get(
      `https://content.googleapis.com/youtube/v3/search?q=tendance+musique+fr&part=snippet&maxResults=1&type=video&key=AIzaSyD0qqnH0XQqwZDlHrZg35xpNNhKyoqD3Pk`
    );
    return data;
  } catch (error) {
    console.log(error);
    return mock;
  }
};
