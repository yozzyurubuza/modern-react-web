import axios from "axios";

const KEY = "AIzaSyDSEcmNuholYVN3JIXvz7NgAwpfWo6e9s0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
