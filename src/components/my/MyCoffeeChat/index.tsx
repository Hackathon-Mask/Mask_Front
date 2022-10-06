import useCoffeeChat from "../../../hooks/my/useCoffeeChat";
import {
  MyCoffeeChatButton,
  MyCoffeeChatTextArea,
  MyCoffeeChatTitle,
} from "./style";

const MyCoffeeChat = () => {
  const { content, onChangeContent, onSubmitCoffeeChat } = useCoffeeChat();

  return (
    <>
      <MyCoffeeChatTitle>메세지</MyCoffeeChatTitle>
      <MyCoffeeChatTextArea value={content} onChange={onChangeContent} />
      <MyCoffeeChatButton onClick={onSubmitCoffeeChat}>
        메세지 보내기
      </MyCoffeeChatButton>
    </>
  );
};

export default MyCoffeeChat;
