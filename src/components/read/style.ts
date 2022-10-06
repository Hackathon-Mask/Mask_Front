import styled from "styled-components";
import { palette } from "../../styles/palette";

export const ReadContainer = styled.div`
  width: 987px;
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  margin-left: auto;
  margin-right: 208.5px;
`;

export const ReadWrap = styled.div`
  display: flex;
  padding-bottom: 85px;
`;

export const ReadContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReadHeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReadHeaderStatusWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
  margin-bottom: 4px;
`;

export const ReadHeaderStatusGif = styled.img`
  width: 26px;
  height: 26px;
  object-fit: scale-down;
`;

export const ReadHeaderStatusText = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #344253;
`;

export const ReadHeaderTitle = styled.h1`
  font-size: 34px;
  color: #2b2b2b;
  font-weight: 600;
  line-height: 41px;
`;

export const ReadHeaderTagWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin-top: 8px;
`;

export const ReadHeaderMajorTag = styled.span`
  height: 24px;
  border-radius: 23px;
  font-size: 13px;
  color: white;
  background: linear-gradient(100.72deg, #0d76f2 42.04%, #00c2ff 100%);
  display: flex;
  align-items: center;
  padding: 0px 12px;
`;

export const ReadHeaderSkillTag = styled.span`
  height: 24px;
  border: 1px solid ${palette.main};
  border-radius: 23px;
  color: ${palette.main};
  display: flex;
  align-items: center;
  padding: 0px 12px;
  font-size: 13px;
`;

export const ReadHeaderProfileWrap = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const ReadHeaderProfileImg = styled.img`
  width: 37px;
  height: 37px;
  border-radius: 100%;
`;

export const ReadHeaderProfileInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 8px;
`;

export const ReadHeaderProfileInfoName = styled.span`
  color: #2b2b2b;
  font-size: 16px;
  cursor: pointer;
`;

export const ReadHeaderProfileInfoCreatedAt = styled.span`
  color: #828282;
  font-size: 14px;
`;

export const ReadTitleImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 16px;
`;

export const ReadViewWrap = styled.div`
  width: 100%;
  font-size: 16px;
  color: black;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    border: 0px;
    margin-bottom: 25px;
    margin-top: 50px;
  }
  h1 {
    font-size: 44px;
    margin-bottom: 35px;
  }
  h2 {
    font-size: 38px;
  }
  h3 {
    font-size: 34px;
  }
  h4 {
    font-size: 30px;
  }
  h5 {
    font-size: 26px;
  }
  h6 {
    font-size: 22px;
  }
  th {
    background-color: #f2f4f6;
    font-weight: bold;
    color: #4e5968;
    p {
      color: #4e5968;
    }
  }
  img {
    width: 100%;
  }
  blockquote {
    padding: 16px 24px;
    border: 1px solid #dbdde5;
    border-left: 6px solid ${palette.main};
    line-height: 19px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
