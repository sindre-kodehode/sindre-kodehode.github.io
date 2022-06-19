import styled                    from "styled-components";
import Section, { SectionProps } from "./Section";

const StyledMain = styled.main`
  background      : #fff   ;
  display         : flex   ;
  gap             : 64px   ;
  justify-content : center ;
  padding         : 32px   ;
`;

const sections: SectionProps[] = [
  { key: 1, header: "Heading One"  , body: "This is body of One"  , },
  { key: 2, header: "Heading Two"  , body: "This is body of Two"  , },
  { key: 3, header: "Heading Three", body: "This is body of Three", },
];

const Main = (): JSX.Element =>
  <StyledMain>
    { sections.map( ( { key, header, body }: SectionProps ) =>
      <Section key={ key } header={ header } body={ body } />
    )}
  </StyledMain>

export default Main;
