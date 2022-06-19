import styled    from "styled-components";
import Heading   from "./Heading";
import Paragraph from "./Paragraph";

const StyledSection = styled.section`
  border-radius : 8px ;
`;

export declare interface SectionProps {
  key   : number,
  header: string,
  body  : string,
};

const Section = ( { header, body }: SectionProps ): JSX.Element =>
  <StyledSection>

    <Heading>{ header }</Heading>
    <Paragraph>{ body }</Paragraph>

  </StyledSection>

export default Section;
