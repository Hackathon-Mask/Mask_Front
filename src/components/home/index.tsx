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
  HomeSortButtonText,
  HomeSortButtonIcon,
} from "./style";
import HomeTitleIconIcon from "../../assets/icon/home/homeTitleIcon.svg";
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import { HOME_SORT_BUTTON_ITEMS } from "../../constants/home/home.constant";
import { useRecoilState } from "recoil";
import { homeCategoryAtom, homeSortAtom } from "../../store/home/home.store";
import { useGetPosts } from "../../quries/post/post.query";
import { useEffect } from "react";
import { postSortModeTransform } from "../../util/transform/dataTransform";

const Home = () => {
  const [sortMode, setSortMode] = useRecoilState(homeSortAtom);
  const [category, setCategory] = useRecoilState(homeCategoryAtom);

  const { data } = useGetPosts({
    queryType: postSortModeTransform(sortMode),
    majorTagId: category.id,
  });

  console.log(data);

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
          {HOME_SORT_BUTTON_ITEMS.map((item) => (
            <HomeSortButton
              isSelect={item.title === sortMode}
              onClick={() => setSortMode(item.title)}
            >
              <HomeSortButtonIcon
                src={item.title === sortMode ? item.icon : item.disableIcon}
              />
              <HomeSortButtonText>{item.title}</HomeSortButtonText>
            </HomeSortButton>
          ))}
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
