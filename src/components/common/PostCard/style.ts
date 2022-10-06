import styled from "styled-components";
import { ellipsisLine } from "../../../styles/libStyle";
import { palette } from "../../../styles/palette";

export const PostCardContainer = styled.div`
  width: 326px;
  height: 330px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const PostCardImg = styled.img`
  width: 100%;
  height: 180px;
  margin-bottom: auto;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const PostCardContentWrap = styled.div`
  width: 100%;
  height: 154px;
  position: absolute;
  bottom: 0px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  box-sizing: border-box;
  z-index: 1;
`;

export const PostCardContentTitle = styled.h1`
  font-size: 20px;
  line-height: 24px;
  color: black;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const PostCardContentSummary = styled.p`
  color: rgba(103, 107, 111, 0.61);
  font-size: 16px;
  ${ellipsisLine(2)};
  line-height: 19px;
`;

export const PostCardContentFieldLabelWrap = styled.div`
  width: 71px;
  height: 24px;
  position: relative;
  margin: auto 0px;
`;

export const PostCardContentFieldLabel = styled.span`
  width: 100%;
  height: 100%;
  background: linear-gradient(100.72deg, #0d76f2 42.04%, #00c2ff 100%);
  position: absolute;
  left: 0px;
  color: white;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
  z-index: 3;
`;

export const PostCardContentFieldLabelOverlay = styled.span`
  width: 59px;
  height: 24px;
  position: absolute;
  left: 19px;
  top: 50%;
  transform: translate(-0%, -50%);
  background-color: ${palette.main};
  border-radius: 22px;
  z-index: 2;
`;

export const PostCardContentCuriousityCountWrap = styled.div`
  display: flex;
  column-gap: 4px;
`;

export const PostCardContentCuriousityCountIconWrap = styled.div`
  width: 12px;
  height: 12px;
  background-color: #a3a3a3;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostCardContentCuriousityCountIcon = styled.div`
  width: 7px;
  height: 7px;
  font-size: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const PostCardContentCuriousityCountText = styled.p`
  font-size: 14px;
  color: black;
`;
