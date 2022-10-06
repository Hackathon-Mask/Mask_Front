import axios from "axios";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token/token.constant";
import cookie from "../cookie";

export const customAxios = axios.create({
  baseURL: "http://52.79.125.202:8888",
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${cookie.getCookie(ACCESS_TOKEN_KEY)}`,
  },
});
