import { User } from "../../../types/user/user.type";
import CoffeeChatListItem from "./CoffeeChatListItem";
import { CoffeeChatListContainer } from "./style";

interface Props {
  data: User[];
}

const CoffeeChatList = ({ data }: Props) => {
  return (
    <CoffeeChatListContainer>
      {data.map((user) => (
        <CoffeeChatListItem data={user} />
      ))}
    </CoffeeChatListContainer>
  );
};

export default CoffeeChatList;
