import { useRecoilState } from "recoil";
import { COFFEECHAT_TAB_ITEMS } from "../../../constants/coffeeChat/coffeeChat";
import { coffeeChatTabAtom } from "../../../store/coffeeChat/coffeeChat.store";
import { CoffeeChatTabContainer, CoffeeChatTabItem } from "./style";

const CoffeeChatTab = () => {
  const [tab, setTab] = useRecoilState(coffeeChatTabAtom);

  return (
    <CoffeeChatTabContainer>
      {COFFEECHAT_TAB_ITEMS.map((item) => (
        <CoffeeChatTabItem
          isSelect={tab === item}
          key={item}
          onClick={() => setTab(item)}
        >
          {item}
        </CoffeeChatTabItem>
      ))}
    </CoffeeChatTabContainer>
  );
};

export default CoffeeChatTab;
