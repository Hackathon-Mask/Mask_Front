import {
  EmailInfo,
  FieldInfo,
  Input,
  NextBtn,
  PasswordInfo,
  SkillInfo,
} from "./style";

const InfoPage1 = () => {
  return (
    <>
      <EmailInfo>
        <p>이메일</p>
        <Input type="text" placeholder="이메일을 적어주세요" />
      </EmailInfo>
      <PasswordInfo>
        <p>비밀번호</p>
        <Input type="text" placeholder="사용하실 비밀번호를 입력해주세요" />
        <p>비밀번호 재입력</p>
        <Input type="text" placeholder="사용하실 비밀번호를 입력해주세요" />
      </PasswordInfo>
      <FieldInfo></FieldInfo>
      <SkillInfo></SkillInfo>
      <NextBtn>다음</NextBtn>
    </>
  );
};

export default InfoPage1;
