import { Post } from "../../../types/post/post.type";
import PostCard from "../../common/PostCard";
import { MyPagePostListContainer } from "./style";



const MyPagePostList = () => {
  return (
    <>
      <MyPagePostListContainer>
        {/* {TEST.map((item) => (
          <PostCard margin="10px" data={item} />
        ))} */}
      </MyPagePostListContainer>
      <MyPagePostListContainer>
        {/* {TEST.map((item) => (
          <PostCard margin="10px" data={item} />
        ))} */}
      </MyPagePostListContainer>
    </>
  );
};

export default MyPagePostList;
