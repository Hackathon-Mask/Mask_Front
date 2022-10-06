import {
  ProfileAllInfo,
  ProfileContainer,
  ProfileImg,
  ProfileWrap,
  ProfileLocation,
  ProfileSkill,
} from "./style";

const MyProfile = () => {
  return (
    <>
      <ProfileContainer>
        <ProfileWrap>
          <ProfileImg></ProfileImg>
          <ProfileAllInfo>
            <ProfileLocation>
              dkswlsgud
              <div className="bedgetextwrap">
                <div className="bedge">소속</div>
                <p className="text">삼쩜삼</p>
              </div>
              <div className="bedgetextwrap">
                <div className="bedge">학교</div>
                <p className="text">광주소프트웨어마이스터고 5기</p>
              </div>
              <div className="bedgetextwrap">
                <div className="bedge">동아리</div>
                <p className="text">themoment</p>
              </div>
            </ProfileLocation>
            <ProfileSkill></ProfileSkill>
          </ProfileAllInfo>
        </ProfileWrap>
      </ProfileContainer>
    </>
  );
};

export default MyProfile;
