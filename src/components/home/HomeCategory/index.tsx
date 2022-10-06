import React from "react";
import { useRecoilState } from "recoil";
import { useGetMajors } from "../../../quries/post/post.query";
import { homeCategoryAtom } from "../../../store/home/home.store";
import { HomeCategoryContainer, HomeCategoryText } from "./style";

const HomeCategory = () => {
  const [category, setCategory] = useRecoilState(homeCategoryAtom);

  const { data: majorData } = useGetMajors();

  return (
    <HomeCategoryContainer>
      {majorData?.tags.map((item) => (
        <HomeCategoryText
          isSelect={category.id === item.id}
          onClick={() => setCategory(item)}
          key={item.id}
        >
          {item.name}
        </HomeCategoryText>
      ))}
    </HomeCategoryContainer>
  );
};

export default React.memo(HomeCategory);
