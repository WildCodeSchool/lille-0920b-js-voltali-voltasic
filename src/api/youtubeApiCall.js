import axios from "axios";
import mock from "./mock.json";

export const getYoutube = async query => {
  try {
    const { data } = await axios.get(
      `https://content.googleapis.com/youtube/v3/search?q=${query}&part=snippet&maxResults=10&type=video&key=AIzaSyBim8xQtVa1paCRELE98qW9xCCKml1NjTM`
    );
    return data;
  } catch (error) {
    console.log(error);
    return mock;
  }
};
