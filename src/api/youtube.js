import Axios from "axios";

const KEY = "AIzaSyBmL9wwQRIECOhm8GvvUp30j3at6VGndpY";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
