import axios from "axios";
import mock from "./mock.json";
export const getTrend = async () => {
  try {
    const { data } = await axios.get(
      `https://content.googleapis.com/youtube/v3/search?q=musique+tendance+fr&part=snippet&maxResults=1&type=video&key=AIzaSyBWwY0cFCu5ceYwk6Jx8ApytK1bqfB7K88`
    );
    return data;
  } catch (error) {
    console.log(error);
    return mock;
  }
};
