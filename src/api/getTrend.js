import axios from "axios";
import Search from "../components/Search";
import mock from "./mock.json";
export const getTrend = async searchValue => {
  try {
    const { data } = await axios.get(
      `https://content.googleapis.com/youtube/v3/search?q=${searchValue}&part=snippet&maxResults=5&type=video&key=AIzaSyBD7jBT9SQik4EUky399mzp3BdVtlHCvJo`
    );
    return data;
  } catch (error) {
    console.log(error);
    return mock;
  }
};
