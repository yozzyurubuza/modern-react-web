import axios from "axios";

//Codes related to axios

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 3v4g1r6C3nwy6_odUNZJXLeIcwK-4YGQ0uXBiRZm2u0",
  },
});
