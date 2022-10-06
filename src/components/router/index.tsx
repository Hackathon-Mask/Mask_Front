import { Routes as Switch, Route } from "react-router-dom";
import AuthPage from "../../pages/AuthPage";
import HomePage from "../../pages/HomePage";
import CoffeeChatPage from "../../pages/StudentPage";
import WritePage from "../../pages/WritePage";

const Router = () => {
  return (
    <Switch>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/coffeecaht" element={<CoffeeChatPage />} />
    </Switch>
  );
};

export default Router;
