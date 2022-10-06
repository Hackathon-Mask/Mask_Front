import { VisiblePost } from "../../../types/post/post.type";
import PostCard from "../../common/PostCard";
import { HomePostListContainer } from "./style";

interface Props {
  data: VisiblePost[];
}

const HomePostList = ({ data }: Props) => {
  return (
    <HomePostListContainer>
      {data.map((post) => (
        <PostCard data={post} key={post.id} />
      ))}
    </HomePostListContainer>
  );
};

export default HomePostList;
