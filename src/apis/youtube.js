import axios from "axios";

const KEY = "AIzaSyBSq5VOk3552aZtj7ZK0m6ikODUEBtNyEY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
