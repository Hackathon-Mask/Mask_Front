import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 73px;
`;

export const HomeHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
`;

export const HomeTitleWrap = styled.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
`;

export const HomeTitleIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: scale-down;
`;

export const HomeTitle = styled.h1`
  font-size: 26px;
  color: black;
  font-weight: 700;
`;

export const HomeControlWrap = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const HomeSearchWrap = styled.div`
  width: 926px;
  height: 40px;
  border-radius: 10px;
  background-color: rgba(194, 197, 201, 0.6);
  display: flex;
  align-items: center;
  padding: 13px 16px;
  box-sizing: border-box;
`;

export const HomeSearchIcon = styled.div`
  min-width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #717579;
`;

export const HomeSearchInput = styled.input`
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

export const HomeSortButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
  outline: none;
  border: 0px;
  cursor: pointer;
`;

export const HomeWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
