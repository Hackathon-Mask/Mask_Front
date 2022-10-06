import useMyProfile from "../../../hooks/my/useMyProfile";
import {
  MyProfileContainer,
  MyProfileContentWrap,
  MyProfileImg,
  MyProfileInfoLabel,
  MyProfileInfoRowWrap,
  MyProfileInfoWrap,
  MyProfileName,
  MyProfileSchoolInfoWrap,
  MyProfileSkillLabel,
  MyProfileSkillTag,
  MyProfileSkillWrap,
  MyProfileWrap,
} from "./style";

const MyProfile = () => {
  const { user } = useMyProfile();

  return (
    <MyProfileContainer>
      <MyProfileWrap>
        <MyProfileImg
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU"
          }
        />
        <MyProfileContentWrap>
          <MyProfileName>{user?.name}</MyProfileName>
          <MyProfileInfoWrap>
            <MyProfileSchoolInfoWrap>
              <MyProfileInfoRowWrap>
                <MyProfileInfoLabel>소속</MyProfileInfoLabel>
                {user?.belong}
              </MyProfileInfoRowWrap>
              <MyProfileInfoRowWrap>
                <MyProfileInfoLabel>학교</MyProfileInfoLabel>
                {user?.school} {user?.generation}기
              </MyProfileInfoRowWrap>
              <MyProfileInfoRowWrap>
                <MyProfileInfoLabel>이메일</MyProfileInfoLabel>
                {user?.email}
              </MyProfileInfoRowWrap>
            </MyProfileSchoolInfoWrap>
            <MyProfileSkillWrap>
              <MyProfileInfoRowWrap>
                <MyProfileSkillLabel>분야</MyProfileSkillLabel>
                <MyProfileSkillTag>{user?.major_tag?.name}</MyProfileSkillTag>
              </MyProfileInfoRowWrap>
              <MyProfileInfoRowWrap>
                <MyProfileSkillLabel>기술</MyProfileSkillLabel>
                {user?.skills.map((skill) => (
                  <MyProfileSkillTag key={skill.id}>
                    {skill?.name}
                  </MyProfileSkillTag>
                ))}
              </MyProfileInfoRowWrap>
            </MyProfileSkillWrap>
          </MyProfileInfoWrap>
        </MyProfileContentWrap>
      </MyProfileWrap>
    </MyProfileContainer>
  );
};

export default MyProfile;
