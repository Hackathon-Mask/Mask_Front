import { useNavigate } from "react-router";
import { NavBarProfileContainer, NavBarProfileImg } from "./style";

const NavBarProfile = () => {
  const navigate = useNavigate();

  return (
    <NavBarProfileContainer>
      <NavBarProfileImg
        onClick={() => navigate("/user")}
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU"
        }
      />
    </NavBarProfileContainer>
  );
};

export default NavBarProfile;
