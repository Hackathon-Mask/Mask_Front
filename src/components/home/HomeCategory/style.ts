import styled, { css } from "styled-components";
import { palette } from "../../../styles/palette";

export const HomeCategoryContainer = styled.div`
  width: 200px;
  row-gap: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const HomeCategoryText = styled.p<{ isSelect: boolean }>`
  font-size: 24px;
  cursor: pointer;
  transition: border-left 0.1s ease-out;

  ${({ isSelect }) =>
    isSelect
      ? css`
          background: -webkit-linear-gradient(left, #0d76f2, #03b1fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: bold;
          border-left: 3px solid ${palette.main};
          padding-left: 7px;
        `
      : css`
          color: #bcbcbc;
          &:hover {
            color: #676666;
          }
        `}
`;
