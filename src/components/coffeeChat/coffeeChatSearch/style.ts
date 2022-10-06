import styled from "styled-components";

export const CoffeeChatSearchContainer = styled.div`
  width: 100%;
  padding: 13px 0px;
  display: flex;
  align-items: center;
`;

export const CoffeeChatSearchIcon = styled.div`
  width: 30px;
  height: 30px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoffeeChatSearchInput = styled.input`
  font-size: 30px;
  margin-left: 7px;
  border: 0px;
  background: none;
  outline: none;

  ::-webkit-input-placeholder {
    color: #b1b1b1;
  }
`;
