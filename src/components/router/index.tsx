import { Routes as Switch, Route } from "react-router-dom";
import AuthPage from "../../pages/AuthPage";
import HomePage from "../../pages/HomePage";
import SignupPage1 from "../../pages/Signup/SignupPage1";
import SignupPage2 from "../../pages/Signup/SignupPage2";

const Router = () => {
  return (
    <Switch>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/signup" element={<SignupPage1 />} />
      <Route path="/signup2" element={<SignupPage2 />} />
    </Switch>
  );
};

export default Router;
