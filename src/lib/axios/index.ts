import axios from "axios";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token.constant";

export const customAxios = axios.create({
  baseURL: "http://52.79.125.202:8888",
  headers: {
    [ACCESS_TOKEN_KEY]: `Bearer`,
  },
});
