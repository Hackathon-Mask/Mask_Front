import CoffeeChatList from "./CoffeeChatList";
import CoffeeChatSearch from "./CoffeeChatSearch";
import CoffeeChatTab from "./CoffeeChatTab";
import { CoffeeChatContainer } from "./style";
const CoffeeChat = () => {
  return (
    <CoffeeChatContainer>
      <CoffeeChatSearch />
      <CoffeeChatTab />
      <CoffeeChatList />
    </CoffeeChatContainer>
  );
};

export default CoffeeChat;
