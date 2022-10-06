import styled from "styled-components";
import { palette } from "../../styles/palette";

export const LoginContainer = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginWrap = styled.div`
  width: 450px;
  height: 482px;
  display: flex;
  flex-direction: column;
`;

export const LoginLogo = styled.img`
  width: 160px;
  object-fit: scale-down;
  margin: 0px auto;
  margin-bottom: 60px;
`;

export const LoginInputTitle = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: #2b2b2b;
  margin-bottom: 8px;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 64px;
  padding: 20px 28px;
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 1px solid #dbdde5;
  border-radius: 10px;

  &:focus {
    border: 1px solid ${palette.main};
  }
`;

export const LoginSubmitButton = styled.button`
  width: 100%;
  height: 69px;
  border-radius: 10px;
  border: 1px solid ${palette.main};
  color: ${palette.main};
  font-size: 24px;
  cursor: pointer;
  margin-top: 60px;
  background-color: white;
  font-weight: bold;
`;

export const LoginAlertText = styled.p`
  font-size: 16px;
  margin: 0px auto;
  color: #2b2b2b;
  margin-top: 24px;

  strong {
    color: ${palette.main};
    cursor: pointer;
  }
`;
