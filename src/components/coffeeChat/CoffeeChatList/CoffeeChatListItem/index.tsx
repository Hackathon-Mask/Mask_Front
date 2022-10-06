import {
  CoffeeChatListItemBottomWrap,
  CoffeeChatListItemContainer,
  CoffeeChatListItemMajorTag,
  CoffeeChatListItemProfileBelong,
  CoffeeChatListItemProfileImg,
  CoffeeChatListItemProfileInfoText,
  CoffeeChatListItemProfileName,
  CoffeeChatListItemProfileTextWrap,
  CoffeeChatListItemProfileWrap,
  CoffeeChatListItemSkillTag,
} from "./style";

const TEST = {
  name: "임동현",
  belong: "당근마켓",
  generation: 6,
  school: "대구소프트웨어마이스터고",
  profileImage: "https://avatars.githubusercontent.com/u/79711744?v=4",
  skills: ["RxJava", "kotlin", "iOS"],
  major: "BackEnd",
};

const CoffeeChatListItem = () => {
  return (
    <CoffeeChatListItemContainer>
      <CoffeeChatListItemProfileWrap>
        <CoffeeChatListItemProfileImg src={TEST.profileImage} />
        <CoffeeChatListItemProfileTextWrap>
          <CoffeeChatListItemProfileName>
            {TEST.name}
          </CoffeeChatListItemProfileName>
          <CoffeeChatListItemProfileInfoText>
            {TEST.school} {TEST.generation}기
          </CoffeeChatListItemProfileInfoText>
          <CoffeeChatListItemProfileBelong>
            {TEST.belong}
          </CoffeeChatListItemProfileBelong>
        </CoffeeChatListItemProfileTextWrap>
      </CoffeeChatListItemProfileWrap>
      <CoffeeChatListItemBottomWrap>
        <CoffeeChatListItemMajorTag>{TEST.major}</CoffeeChatListItemMajorTag>
        {TEST.skills.map((skill) => (
          <CoffeeChatListItemSkillTag>{skill}</CoffeeChatListItemSkillTag>
        ))}
      </CoffeeChatListItemBottomWrap>
    </CoffeeChatListItemContainer>
  );
};

export default CoffeeChatListItem;
