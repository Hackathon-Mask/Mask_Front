import styled from "styled-components";

export const ReadAnswerFormContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 16px;
  position: relative;
  background-color: white;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const ReadAnswerFormTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  background: none;
  outline: none;
  border: 0px;
  resize: none;
  font-size: 16px;

  ::-webkit-input-placeholder {
    color: #a8a8a8;
  }
`;

export const ReadAnswerFormButton = styled.button`
  width: 57px;
  height: 25px;
  background-color: #eaeaea;
  color: black;
  border-radius: 18px;
  border: 0px;
  outline: none;
  position: absolute;
  right: 16px;
  bottom: 16px;
`;
