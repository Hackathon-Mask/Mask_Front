import axios from "axios";
import { REQUEST_TOKEN_KEY } from "../../constants/token/token.constant";

export const customAxios = axios.create({
  baseURL: "http://52.79.125.202:8888",
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer eyJKV1QiOiJhY2Nlc3MiLCJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxIiwiYXV0aG9yaXR5IjoiU1RVREVOVCIsImlhdCI6MTY2NTAxODMzNiwiZXhwIjoxNjY2NDI4NDAwfQ.u8n6F6zp3GzVieXEKHvbtowCc64eAbMSZu1eUm2l-fU7z1L4lPCyCfmSSaX9qGHYH75yABIwfDEO2HGZp7fkIw`,
  },
});
