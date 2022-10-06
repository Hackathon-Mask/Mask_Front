import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const ReadAnswerContainer = styled.div`
  width: 100%;
  min-height: 322px;
  background-color: #eff2f7;
  padding-top: 28px;
  display: flex;
  justify-content: center;
  padding-bottom: 120px;
`;

export const ReadAnswerWrap = styled.div`
  width: 903px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ReadAnswerCount = styled.span`
  font-size: 20px;
  color: black;
  font-weight: 600;

  strong {
    color: ${palette.main};
  }
`;

export const ReadAnswerListWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 16px;
`;
