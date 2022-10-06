import styled, { css } from "styled-components";
import { palette } from "../../../styles/palette";

export const NavBarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f9fc;
`;
export const NavBarWrap = styled.div`
  width: 1320px;
  height: 100%;
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
  cursor: pointer;

  ${({ isSelect }) =>
    isSelect
      ? css`
          font-weight: bold;
          color: ${palette.main};
        `
      : css`
          color: #989898;
        `}
`;
