import styled from "styled-components";
import { palette } from "../../../../styles/palette";

export const CoffeeChatListItemContainer = styled.div`
  width: 330px;
  height: 134px;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  cursor: pointer;
`;

export const CoffeeChatListItemProfileWrap = styled.div`
  display: flex;
`;

export const CoffeeChatListItemProfileImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  object-fit: cover;
`;

export const CoffeeChatListItemProfileTextWrap = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 8px;
`;

export const CoffeeChatListItemProfileName = styled.h1`
  font-weight: 600;
  color: #6f6f6f;
  font-size: 20px;
`;

export const CoffeeChatListItemProfileInfoText = styled.p`
  font-size: 16px;
  color: #676b6f9c;
`;

export const CoffeeChatListItemProfileBelong = styled.span`
  font-size: 16px;
  color: #a2a5a7;
`;

export const CoffeeChatListItemBottomWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const CoffeeChatListItemMajorTag = styled.span`
  height: 24px;
  border-radius: 23px;
  font-size: 13px;
  color: white;
  background: linear-gradient(100.72deg, #0d76f2 42.04%, #00c2ff 100%);
  display: flex;
  align-items: center;
  padding: 0px 12px;
`;

export const CoffeeChatListItemSkillTag = styled.span`
  height: 24px;
  border: 1px solid ${palette.main};
  border-radius: 23px;
  color: ${palette.main};
  display: flex;
  align-items: center;
  padding: 0px 12px;
  font-size: 13px;
`;
