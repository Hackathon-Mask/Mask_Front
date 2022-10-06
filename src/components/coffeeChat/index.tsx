import { useRecoilState } from "recoil";
import { useGetCoffeeChat } from "../../quries/coffeeChat/coffeeChat.query";
import { coffeeChatTabAtom } from "../../store/coffeeChat/coffeeChat.store";
import { schoolTransform } from "../../util/transform/dataTransform";
import CoffeeChatList from "./CoffeeChatList";
import CoffeeChatSearch from "./coffeeChatSearch";
import CoffeeChatTab from "./CoffeeChatTab";
import { CoffeeChatContainer } from "./style";
const CoffeeChat = () => {
  const [tab, setTab] = useRecoilState(coffeeChatTabAtom);

  const { data } = useGetCoffeeChat({ school: schoolTransform(tab) });

  return (
    <CoffeeChatContainer>
      <CoffeeChatSearch />
      <CoffeeChatTab />
      <CoffeeChatList data={data?.users!} />
    </CoffeeChatContainer>
  );
};

export default CoffeeChat;
