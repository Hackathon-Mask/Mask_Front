import styled, { css } from "styled-components";
import { editorStyle } from "../../styles/editorStyle";
import { palette } from "../../styles/palette";

export const WriteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input[type="file"] {
    display: none;
  }
`;

export const WriteTitle = styled.h1`
  font-size: 48px;
  background: -webkit-linear-gradient(left, #0d76f2, #03b1fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  margin: 120px auto;
`;

export const WriteInputTitle = styled.h1`
  color: #222222;
  font-size: 24px;
  margin-bottom: 12px;
  font-weight: bold;
`;

export const WriteInputSubTitle = styled.span`
  color: #9a9a9a;
  font-size: 24px;
  margin-left: 5px;
`;

export const WriteInput = styled.input`
  border: 1px solid #dbdde5;
  border-radius: 10px;
  width: 100%;
  padding: 20px 28px;
  font-size: 20px;
  outline: none;
  height: 64px;
  box-sizing: border-box;
  margin-bottom: 100px;

  ::-webkit-input-placeholder {
    color: #a4a4a4;
  }
`;

export const WriteTagWrap = styled.div`
  width: 843px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 8px;
  margin-bottom: 100px;
`;

export const WriteTag = styled.div<{ isSelect: boolean }>`
  height: 29px;
  padding: 0px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${palette.main};
  border: 1px solid ${palette.main};
  border-radius: 23px;
  cursor: pointer;
  box-sizing: border-box;

  ${({ isSelect }) =>
    isSelect &&
    css`
      background: linear-gradient(100.72deg, #0d76f2 42.04%, #00c2ff 100%);
      color: white;
      border: 0px;
    `}
`;

export const WriteWrap = styled.div`
  margin: 100px 0px;
  display: flex;
  justify-content: space-between;
  height: 500px;
  margin-bottom: 120px;
`;

export const WriteTextArea = styled.textarea`
  width: 689px;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #dbdde5;
  padding: 20px 28px;
  box-sizing: border-box;
  font-size: 20px;
  resize: none;
  outline: none;

  ::-webkit-input-placeholder {
    color: #a4a4a4;
  }
`;

export const WriteFileLabel = styled.label`
  width: 599px;
  height: 100%;
  border: 1px solid #dbdde5;
  background-color: #ebeff4;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const WriteFileLabelWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
`;

export const WriteFileLabelIcon = styled.img`
  width: 60px;
  height: 60px;
  object-fit: scale-down;
`;

export const WriteFileImage = styled.img`
  width: 599px;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const WriteFileLabelText = styled.p`
  color: #949494;
  font-size: 18px;
`;

export const WriteEditorWrap = styled.div`
  height: 691px;
  ${editorStyle}
`;

export const WriteSubmitButton = styled.button`
  width: 430px;
  height: 69px;
  border-radius: 10px;
  border: 1px solid ${palette.main};
  background-color: white;
  font-size: 24px;
  color: ${palette.main};
  font-weight: bold;
  margin: 0px auto;
  margin-bottom: 120px;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    color: white;
    border: 0px;
    background: linear-gradient(96.36deg, #0d77f3 44.99%, #03b4fd 95.23%);
  }
`;
