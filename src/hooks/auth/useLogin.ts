import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token.constant";
import cookie from "../../lib/cookie";

const useLogin = () => {
  const [loginData, setLoginData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChangeLoginData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitLogin = async () => {
    try {
      const { data } = await axios.post(
        "http://52.79.125.202:8888/users/tokens",
        {
          email: loginData.email,
          password: loginData.password,
        }
      );
      cookie.setCookie(ACCESS_TOKEN_KEY, data.access_token);
      navigate("/");
    } catch (error) {}
  };

  return { loginData, onChangeLoginData, onSubmitLogin };
};

export default useLogin;
