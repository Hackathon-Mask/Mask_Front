import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const MyCoffeeChatTitle = styled.h1`
  font-size: 24px;
  margin-top: 62px;
  margin-bottom: 8px;
  font-size: 24px;
  margin-top: 58px;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const MyCoffeeChatTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid #dbdde5;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  font-size: 20px;
  resize: none;

  ::-webkit-input-placeholder {
    color: #a4a4a4;
  }
`;

export const MyCoffeeChatButton = styled.button`
  width: 450px;
  height: 69px;
  border-radius: 10px;
  border: 1px solid ${palette.main};
  background-color: white;
  font-size: 24px;
  color: ${palette.main};
  font-weight: bold;
  margin: 0px auto;
  margin-top: 100px;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    color: white;
    border: 0px;
    background: linear-gradient(96.36deg, #0d77f3 44.99%, #03b4fd 95.23%);
  }
`;
