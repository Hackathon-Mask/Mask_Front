import {
  NavBarSearchContainer,
  NavBarSearchIcon,
  NavBarSearchInput,
} from "./style";
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";

const NavBarSearch = () => {
  return (
    <NavBarSearchContainer>
      <NavBarSearchIcon>
        <FiSearch />
      </NavBarSearchIcon>
      <NavBarSearchInput placeholder="궁금증을 입력해주세요!" />
    </NavBarSearchContainer>
  );
};

export default NavBarSearch;
