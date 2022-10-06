import {
  CoffeeChatSearchContainer,
  CoffeeChatSearchIcon,
  CoffeeChatSearchInput,
} from "./style";
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";

const CoffeeChatSearch = () => {
  return (
    <CoffeeChatSearchContainer>
      <CoffeeChatSearchIcon>
        <FiSearch />
      </CoffeeChatSearchIcon>
      <CoffeeChatSearchInput placeholder="검색어 입력해주세요." />
    </CoffeeChatSearchContainer>
  );
};

export default CoffeeChatSearch;
