import {
  LoginAlertText,
  LoginContainer,
  LoginInput,
  LoginInputTitle,
  LoginLogo,
  LoginSubmitButton,
  LoginWrap,
} from "./style";

import Logo from "../../assets/logo/logo.svg";
import useLogin from "../../hooks/auth/useLogin";

const Login = () => {
  const { loginData, onChangeLoginData, onSubmitLogin } = useLogin();

  return (
    <LoginContainer>
      <LoginWrap>
        <LoginLogo src={Logo} />
        <LoginInputTitle>아이디</LoginInputTitle>
        <LoginInput
          value={loginData.email}
          name="email"
          onChange={onChangeLoginData}
          placeholder="s21032@gsm.hs.kr"
        />
        <LoginInputTitle>비밀번호</LoginInputTitle>
        <LoginInput
          value={loginData.password}
          name="password"
          type="password"
          onChange={onChangeLoginData}
          placeholder="비밀번호를 입력해주세요."
        />
        <LoginSubmitButton onClick={onSubmitLogin}>로그인</LoginSubmitButton>
        <LoginAlertText>
          마스크가 처음이신가요? <strong>회원가입</strong>하러가기
        </LoginAlertText>
      </LoginWrap>
    </LoginContainer>
  );
};

export default Login;
