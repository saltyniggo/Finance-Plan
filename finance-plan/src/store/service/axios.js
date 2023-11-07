import axios from "axios";

async function postFeed(feedname) {
  const response = await axios({
    method: "post",
    url: "https://io.adafruit.com/api/v2/angelos12345/feeds/",
    headers: { "X-AIO-Key": "aio_kcGI202lAbtvIsWVhfyx21H8Kp6P" },
    data: {
      feed: {
        name: feedname,
      },
    },
  });
  return response;
}

export default {
  postFeed,
};
