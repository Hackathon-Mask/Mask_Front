import { useLocation } from "react-router";
import { useGetMyPosts } from "../../../quries/post/post.query";
import PostCard from "../../common/PostCard";
import MyCoffeeChat from "../MyCoffeeChat";
import {
  MyPageCoffeeChatContainer,
  MyPagePostListContainer,
  MyPagePostListTitle,
} from "./style";

const MyPagePostList = () => {
  const { pathname } = useLocation();

  const { data } = useGetMyPosts();

  return (
    <>
      {pathname === "/user" ? (
        <>
          <MyPagePostListTitle>내가 한 질문들</MyPagePostListTitle>
          <MyPagePostListContainer>
            {data?.questions.map((item) => (
              <PostCard data={item} key={item.id} />
            ))}
          </MyPagePostListContainer>
        </>
      ) : (
        <MyPageCoffeeChatContainer>
          <MyCoffeeChat />
        </MyPageCoffeeChatContainer>
      )}
    </>
  );
};

export default MyPagePostList;
