import Header        from "../Header";
import Main          from "../Main";
import SectionProps  from "./Section.type";
import StyledSection from "./Section.style";

export default ( { header, children } : SectionProps ) =>
  <StyledSection>
    <Header text={ header } />
    <Main>{ children }</Main>
  </StyledSection>
