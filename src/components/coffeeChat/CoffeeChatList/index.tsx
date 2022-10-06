import CoffeeChatListItem from "./CoffeeChatListItem";
import { CoffeeChatListContainer } from "./style";

const CoffeeChatList = () => {
  return (
    <CoffeeChatListContainer>
      <CoffeeChatListItem />
      <CoffeeChatListItem />
      <CoffeeChatListItem />
      <CoffeeChatListItem />
    </CoffeeChatListContainer>
  );
};

export default CoffeeChatList;
