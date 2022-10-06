import styled, { css } from "styled-components";

export const CoffeeChatTabContainer = styled.div`
  width: 348px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px auto;
  margin-bottom: 60px;
`;

export const CoffeeChatTabItem = styled.span<{ isSelect: boolean }>`
  font-size: 24px;
  cursor: pointer;

  ${({ isSelect }) =>
    isSelect
      ? css`
          color: #0d77f3;
          font-weight: bold;
        `
      : css`
          color: #bfbfbf;
        `}
`;
