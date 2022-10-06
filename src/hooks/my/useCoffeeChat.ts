import React, { useState } from "react";
import { useParams } from "react-router";
import coffeeChatRepository from "../../repository/coffeeChat/coffeeChat.repository";

const useCoffeeChat = () => {
  const [content, setContent] = useState("");
  const { userid } = useParams();

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onSubmitCoffeeChat = async () => {
    try {
      await coffeeChatRepository.postCoffeeChat({
        message: content,
        to_user_id: Number(userid)!,
      });
    } catch (error) {}
  };

  return {
    content,
    onChangeContent,
    onSubmitCoffeeChat,
  };
};

export default useCoffeeChat;
