import { Routes as Switch, Route, useNavigate } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import SignupPage1 from "../../pages/Signup/SignupPage1";
import SignupPage2 from "../../pages/Signup/SignupPage2";
import ReadPage from "../../pages/ReadPage";
import MyPage from "../../pages/MyPage";
import CoffeeChatPage from "../../pages/StudentPage";
import WritePage from "../../pages/WritePage";
import LoginPage from "../../pages/LoginPage";
import { useEffect } from "react";
import cookie from "../../lib/cookie";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token.constant";

const Router = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookie.getCookie(ACCESS_TOKEN_KEY)) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Switch>
      <Route path="/" element={<HomePage />} />
      <Route path="/user" element={<MyPage />} />
      <Route path="/user/:userid" element={<MyPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage1 />} />
      <Route path="/signup2" element={<SignupPage2 />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/coffeechat" element={<CoffeeChatPage />} />
      <Route path="/read/:questionid" element={<ReadPage />} />
    </Switch>
  );
};

export default Router;
