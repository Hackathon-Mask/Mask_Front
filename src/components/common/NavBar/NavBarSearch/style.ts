import styled from "styled-components";

export const NavBarSearchContainer = styled.div`
  width: 600px;
  height: 46px;
  border-radius: 10px;
  background-color: rgba(194, 197, 201, 0.6);
  display: flex;
  align-items: center;
  padding: 13px 16px;
  box-sizing: border-box;
  margin-right: 179px;
`;

export const NavBarSearchIcon = styled.div`
  min-width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #717579;
`;

export const NavBarSearchInput = styled.input`
  width: 100%;
  font-size: 16px;
  margin-left: 9px;
  background: none;
  border: 0px;
  outline: none;

  &::-webkit-input-placeholder {
    color: #717579;
  }
`;
