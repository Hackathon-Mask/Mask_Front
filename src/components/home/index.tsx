import HomeCategory from "./HomeCategory";
import HomePostList from "./HomePostList";
import {
  HomeContainer,
  HomeControlWrap,
  HomeHeaderWrap,
  HomeSearchWrap,
  HomeSearchIcon,
  HomeTitle,
  HomeTitleIcon,
  HomeTitleWrap,
  HomeWrap,
  HomeSearchInput,
  HomeSortButton,
} from "./style";
import HomeTitleIconIcon from "../../assets/icon/home/homeTitleIcon.svg";
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";

const Home = () => {
  return (
    <HomeContainer>
      <HomeHeaderWrap>
        <HomeTitleWrap>
          <HomeTitleIcon src={HomeTitleIconIcon} />
          <HomeTitle>분야</HomeTitle>
        </HomeTitleWrap>
        <HomeControlWrap>
          <HomeSearchWrap>
            <HomeSearchIcon>
              <FiSearch />
            </HomeSearchIcon>
            <HomeSearchInput placeholder="궁금증을 입력해주세요!" />
          </HomeSearchWrap>
          <HomeSortButton></HomeSortButton>
          <HomeSortButton></HomeSortButton>
        </HomeControlWrap>
      </HomeHeaderWrap>
      <HomeWrap>
        <HomeCategory />
        <HomePostList />
      </HomeWrap>
    </HomeContainer>
  );
};

export default Home;
