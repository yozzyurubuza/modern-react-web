import axios from "axios";

const KEY = "AIzaSyAvxAuy9Vr2yk0tRRjokI3sQ3WkmZcla_A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
