import { Routes as Switch, Route } from "react-router-dom";
import AuthPage from "../../pages/AuthPage";
import HomePage from "../../pages/HomePage";
import SignupPage1 from "../../pages/Signup/SignupPage1";
import SignupPage2 from "../../pages/Signup/SignupPage2";
import ReadPage from "../../pages/ReadPage";
import MyPage from "../../pages/MyPage";
import CoffeeChatPage from "../../pages/StudentPage";
import WritePage from "../../pages/WritePage";

const Router = () => {
  return (
    <Switch>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
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
