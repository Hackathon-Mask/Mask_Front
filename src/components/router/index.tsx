import { Routes as Switch, Route } from "react-router-dom";
import AuthPage from "../../pages/AuthPage";
import HomePage from "../../pages/HomePage";
import ReadPage from "../../pages/ReadPage";
import MyPage from "../../pages/MyPage";
import CoffeeChatPage from "../../pages/StudentPage";
import WritePage from "../../pages/WritePage";

const Router = () => {
  return (
    <Switch>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/user" element={<MyPage />} />
      <Route path="/user/:userid" element={<MyPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/coffeechat" element={<CoffeeChatPage />} />
      <Route path="/read/:questionid" element={<ReadPage />} />
    </Switch>
  );
};

export default Router;
