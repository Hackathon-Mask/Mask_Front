import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import coffeeChatRepository from "../../repository/coffeeChat/coffeeChat.repository";
import { coffeeChatTabAtom } from "../../store/coffeeChat/coffeeChat.store";
import { User } from "../../types/user/user.type";
import { schoolTransform } from "../../util/transform/dataTransform";
import CoffeeChatList from "./CoffeeChatList";
import CoffeeChatSearch from "./coffeeChatSearch";
import CoffeeChatTab from "./CoffeeChatTab";
import { CoffeeChatContainer } from "./style";
const CoffeeChat = () => {
  const [tab, setTab] = useRecoilState(coffeeChatTabAtom);
  const [studenst, setStudenst] = useState<User[]>([]);
  const request = useCallback(async () => {
    try {
      const { users } = await coffeeChatRepository.getStudents({
        school: schoolTransform(tab),
      });
      setStudenst(users);
    } catch (error) {}
  }, [tab]);

  useEffect(() => {
    request();
  }, [tab, request]);

  return (
    <CoffeeChatContainer>
      <CoffeeChatSearch />
      <CoffeeChatTab />
      <CoffeeChatList data={studenst} />
    </CoffeeChatContainer>
  );
};

export default CoffeeChat;
