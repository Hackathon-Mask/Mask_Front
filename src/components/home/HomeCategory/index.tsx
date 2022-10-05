import { useRecoilState } from "recoil";
import { POST_FIELDS } from "../../../constants/post/post.constant";
import { homeCategoryAtom } from "../../../store/home/home.store";
import { HomeCategoryContainer, HomeCategoryText } from "./style";

const HomeCategory = () => {
  const [category, setCategory] = useRecoilState(homeCategoryAtom);

  return (
    <HomeCategoryContainer>
      {POST_FIELDS.map((item) => (
        <HomeCategoryText
          isSelect={category === item}
          onClick={() => setCategory(item)}
        >
          {item}
        </HomeCategoryText>
      ))}
    </HomeCategoryContainer>
  );
};

export default HomeCategory;
