import { useLocation, useNavigate } from "react-router-dom";
import { NAV_BAR_TAB_ITEMS } from "../../../constants/common/common.constant";
import NavBarProfile from "./NavBarProfile";
import NavBarSearch from "./NavBarSearch";
import {
  NavBarContainer,
  NavBarLogo,
  NavBarTab,
  NavBarTabWrap,
  NavBarWrap,
} from "./style";

const NavBar = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  return (
    <NavBarContainer>
      <NavBarWrap>
        <NavBarLogo alt={"sdasd"} />
        <NavBarTabWrap>
          {NAV_BAR_TAB_ITEMS.map((item) => (
            <NavBarTab
              isSelect={pathname === item.link}
              onClick={() => navigate(item.link)}
              key={item.title}
            >
              {item.title}
            </NavBarTab>
          ))}
        </NavBarTabWrap>
        <NavBarSearch />
        <NavBarProfile />
      </NavBarWrap>
    </NavBarContainer>
  );
};

export default NavBar;
