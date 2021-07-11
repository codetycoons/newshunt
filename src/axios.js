import axios from "axios";
import { NEWS_API_KEY } from "./common/common";

const instance = axios.create({
  baseURL: "https://newsapi.org/v2/",
});

instance.defaults.headers.common["Authorization"] = "Bearer" + NEWS_API_KEY;

export default instance;
