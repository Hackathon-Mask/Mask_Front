import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const MyProfileContainer = styled.div`
  width: 100%;
  height: 200px;

  padding-bottom: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ececec;
`;

export const MyProfileWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const MyProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
`;

export const MyProfileContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
`;

export const MyProfileName = styled.h1`
  font-size: 24px;
  color: #2b2b2b;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const MyProfileInfoWrap = styled.div`
  display: flex;
`;

export const MyProfileSchoolInfoWrap = styled.div`
  width: 410px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const MyProfileInfoRowWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: #676666;
`;

export const MyProfileInfoLabel = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
  font-size: 14px;
  background-color: ${palette.main};
  border-radius: 30px;
  color: white;
  padding: 0px 12px;
`;

export const MyProfileSkillWrap = styled.div`
  width: 410px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const MyProfileSkillLabel = styled.div`
  background-color: white;
  border: 1px solid ${palette.main};
  height: 25px;
  display: flex;
  align-items: center;
  font-size: 14px;
  border-radius: 30px;
  padding: 0px 12px;
  color: ${palette.main};
`;

export const MyProfileSkillTag = styled.div`
  background: linear-gradient(100.72deg, #0d76f2 42.04%, #00c2ff 100%);
  border-radius: 23px;
  height: 25px;
  padding: 0px 12px;
  font-size: 13px;
  color: white;
  display: flex;
  align-items: center;
`;
