import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { useGetMyUser, useGetUser } from "../../quries/user/user.query";
import { User } from "../../types/user/user.type";

const useMyProfile = () => {
  const { pathname } = useLocation();
  const { userid } = useParams();

  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
    school: "",
    generation: 0,
    belong: "",
    email: "",
    major_tag: {
      id: 0,
      name: "",
    },
    skills: [],
  });

  const { data: myUserdata } = useGetMyUser();
  const { data: userData } = useGetUser({ userId: Number(userid)! });

  useEffect(() => {
    if (pathname === "/user") {
      setUser(myUserdata!);
    } else {
      setUser(userData!);
    }
  }, [pathname, myUserdata, userData]);

  return { user };
};

export default useMyProfile;
