import { ReactNode } from "react";
import { useLocation } from "react-router";
import NavBar from "../NavBar";
import { PageTemplateContainer, PageTemplateWrap } from "./style";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  const { pathname } = useLocation();

  return (
    <PageTemplateContainer>
      {!(pathname === "/login" || pathname === "/signup") && <NavBar />}
      <PageTemplateWrap>{children}</PageTemplateWrap>
    </PageTemplateContainer>
  );
};

export default PageTemplate;
