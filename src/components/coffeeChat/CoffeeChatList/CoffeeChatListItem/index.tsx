import { useNavigate } from "react-router";
import { User } from "../../../../types/user/user.type";
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

interface Props {
  data: User;
}

const CoffeeChatListItem = ({ data }: Props) => {
  const navigate = useNavigate();

  return (
    <CoffeeChatListItemContainer onClick={() => navigate(`/user/${data.id}`)}>
      <CoffeeChatListItemProfileWrap>
        <CoffeeChatListItemProfileImg
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU"
          }
        />
        <CoffeeChatListItemProfileTextWrap>
          <CoffeeChatListItemProfileName>
            {data.name}
          </CoffeeChatListItemProfileName>
          <CoffeeChatListItemProfileInfoText>
            {data.school} {data.generation}기
          </CoffeeChatListItemProfileInfoText>
          <CoffeeChatListItemProfileBelong>
            {data.belong}
          </CoffeeChatListItemProfileBelong>
        </CoffeeChatListItemProfileTextWrap>
      </CoffeeChatListItemProfileWrap>
      <CoffeeChatListItemBottomWrap>
        <CoffeeChatListItemMajorTag>
          {data.major_tag.name}
        </CoffeeChatListItemMajorTag>
        {data.skills
          .map((skill) => (
            <CoffeeChatListItemSkillTag key={skill.id}>
              {skill.name}
            </CoffeeChatListItemSkillTag>
          ))
          .slice(0, 2)}
      </CoffeeChatListItemBottomWrap>
    </CoffeeChatListItemContainer>
  );
};

export default CoffeeChatListItem;
