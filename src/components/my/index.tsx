import MyPagePostList from "./MyPostList";
import MyProfile from "./MyProfile";
import { MyContainer } from "./style";

const My = () => {
  return (
    <MyContainer>
      <MyProfile />
      <MyPagePostList></MyPagePostList>
    </MyContainer>
  );
};

export default My;
