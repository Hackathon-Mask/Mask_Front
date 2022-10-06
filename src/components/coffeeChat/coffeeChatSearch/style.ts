import styled from "styled-components";

export const CoffeeChatSearchContainer = styled.div`
  width: 100%;
  padding: 13px 0px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  margin-bottom: 60px;
`;

export const CoffeeChatSearchIcon = styled.div`
  width: 30px;
  height: 30px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b1b1b1;
`;

export const CoffeeChatSearchInput = styled.input`
  width: 100%;
  font-size: 30px;
  margin-left: 7px;
  border: 0px;
  background: none;
  outline: none;

  ::-webkit-input-placeholder {
    color: #b1b1b1;
  }
`;
