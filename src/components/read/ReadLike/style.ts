import styled, { css } from "styled-components";
import { palette } from "../../../styles/palette";

export const ReadLikeContainer = styled.div`
  min-width: 60px;
  height: 145px;
  position: sticky;
  margin-top: 197px;
  top: 197px;
  border-radius: 50px;
  background-color: #ebeef3;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 24px;
  padding: 10px 0px;
`;

export const ReadLikeButton = styled.button<{ isClick: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 0px;
  cursor: pointer;
  padding: 0px;
  color: ${palette.main};

  ${({ isClick }) =>
    isClick &&
    css`
      background-color: ${palette.main};
      color: white;
    `}

  &:hover {
    background-color: ${palette.main};
    color: white;
  }
`;

export const ReadLikeButtonIcon = styled.div`
  width: 23px;
  height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
`;

export const ReadLikeCount = styled.span`
  color: #8e8e8e;
  font-size: 18px;
  line-height: 21px;
  margin-top: 4px;
`;

export const ReadLikeLinkButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 0px;
  cursor: pointer;
  padding: 0px;
  margin-top: auto;
`;
