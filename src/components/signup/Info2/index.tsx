import { Input } from "../Info1/style";
import { NameInfo, PhoneInfo, SchoolyearInfo, SubmitBtn } from "./style";

const InfoPage2 = () => {
  return (
    <>
      <NameInfo>
        <p>이름</p>
        <Input type="text" placeholder="실명을 입력해주세요" />
      </NameInfo>
      <PhoneInfo>
        <p>전화번호</p>
        <Input type="text" placeholder="전화번호를 입력해주세요" />
      </PhoneInfo>
      <SchoolyearInfo>
        <p>기수</p>
        <Input type="text" placeholder="전화번호를 입력해주세요" />
      </SchoolyearInfo>
      <SubmitBtn>가입하기</SubmitBtn>
    </>
  );
};

export default InfoPage2;
