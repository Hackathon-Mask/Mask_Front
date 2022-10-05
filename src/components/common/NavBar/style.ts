import styled, { css } from "styled-components";
import { palette } from "../../../styles/palette";

export const NavBarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;

export const NavBarLogo = styled.img`
  width: 83px;
`;

export const NavBarTabWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
  margin-left: 47px;
  margin-right: auto;
`;

export const NavBarTab = styled.div<{ isSelect: boolean }>`
  font-size: 18px;

  ${({ isSelect }) =>
    isSelect
      ? css`
          color: ${palette.main};
        `
      : css`
          color: #676666;
        `}
`;
