import { useLocation, useNavigate } from "react-router-dom";
import { NAV_BAR_TAB_ITEMS } from "../../../constants/common/common.constant";
import NavBarProfile from "./NavBarProfile";
import {
  NavBarContainer,
  NavBarLogo,
  NavBarTab,
  NavBarTabWrap,
  NavBarWrap,
} from "./style";
import Logo from "../../../assets/logo/logo.svg";

const NavBar = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  return (
    <NavBarContainer>
      <NavBarWrap>
        <NavBarLogo src={Logo} alt={"sdasd"} />
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
        <NavBarProfile />
      </NavBarWrap>
    </NavBarContainer>
  );
};

export default NavBar;
