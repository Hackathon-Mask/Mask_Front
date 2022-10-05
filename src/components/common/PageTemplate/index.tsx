import { ReactNode } from "react";
import NavBar from "../NavBar";
import { PageTemplateContainer, PageTemplateWrap } from "./style";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  return (
    <PageTemplateContainer>
      <PageTemplateWrap>
        <NavBar />
        {children}
      </PageTemplateWrap>
    </PageTemplateContainer>
  );
};

export default PageTemplate;
