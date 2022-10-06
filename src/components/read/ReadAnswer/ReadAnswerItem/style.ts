import styled from "styled-components";
import { palette } from "../../../../styles/palette";

export const ReadAnswerItemContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 16px;
  position: relative;
  background-color: white;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const ReadAnswerItemHeaderWrap = styled.div`
  display: flex;
`;

export const ReadAnswerItemHeaderProfileImg = styled.img`
  width: 37px;
  height: 37px;
  border-radius: 100%;
`;
export const ReadAnswerItemHeaderWriterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 2px;
  margin-left: 8px;
`;

export const ReadAnswerItemHeaderWriterNameWrap = styled.div`
  display: flex;
  height: 16px;
`;

export const ReadAnswerItemHeaderWriterName = styled.span`
  color: #2b2b2b;
  font-size: 13px;
`;

export const ReadAnswerItemHeaderTimeCount = styled.span`
  color: #9c9c9c;
  font-size: 13px;
  margin-left: 8px;
`;

export const ReadAnswerItemHeaderContent = styled.p`
  color: #2b2b2b;
  line-height: 19px;
`;
export const ReadAnswerItemTagWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  column-gap: 8px;
`;

export const ReadAnswerItemMajorTag = styled.span`
  height: 24px;
  border-radius: 23px;
  font-size: 13px;
  color: white;
  background: linear-gradient(100.72deg, #0d76f2 42.04%, #00c2ff 100%);
  display: flex;
  align-items: center;
  padding: 0px 12px;
`;

export const ReadAnswerItemSkillTag = styled.span`
  height: 24px;
  border: 1px solid ${palette.main};
  border-radius: 23px;
  color: ${palette.main};
  display: flex;
  align-items: center;
  padding: 0px 12px;
  font-size: 13px;
`;
