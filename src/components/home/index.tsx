import HomeCategory from "./HomeCategory";
import HomePostList from "./HomePostList";
import { HomeContainer, HomeTitle, HomeWrap } from "./style";

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>분야</HomeTitle>
      <HomeWrap>
        <HomeCategory />
        <HomePostList />
      </HomeWrap>
    </HomeContainer>
  );
};

export default Home;
