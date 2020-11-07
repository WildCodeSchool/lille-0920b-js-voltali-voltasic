import axios from "axios";
import mock from "./mock.json";

export const getChannelPicture = async channelId => {
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=${channelId}&key=AIzaSyD0qqnH0XQqwZDlHrZg35xpNNhKyoqD3Pk`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return mock;
  }
};
