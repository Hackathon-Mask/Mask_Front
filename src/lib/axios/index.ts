import axios from "axios";
import { REQUEST_TOKEN_KEY } from "../../constants/token/token.constant";

export const customAxios = axios.create({
  baseURL: "http://52.79.125.202:8888",
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer eyJKV1QiOiJhY2Nlc3MiLCJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxIiwiYXV0aG9yaXR5IjoiU1RVREVOVCIsImlhdCI6MTY2NTA1MzAzNSwiZXhwIjoxNjY2NDYzMDk5fQ.gK8w6U1aR7kunnsJTMPJ9ozEPxCq9ADH_a6HtBKIO40J27EPegOMj07ErE8uymNHvnfcoY5Q6IQLSC-fLlQBPg`,
  },
});
