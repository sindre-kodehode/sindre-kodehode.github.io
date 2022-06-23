import { ReactNode } from "react";
import styled        from "styled-components";
import Heading       from "./Heading";
import Paragraph     from "./Paragraph";

const StyledSection = styled.section`
  border-radius : 8px ;
`;

export declare interface SectionProps {
  header   : string,
  children : ReactNode,
};

const Section = ( { header, children }: SectionProps ): JSX.Element =>
  <StyledSection>
    <Heading>{ header }</Heading>
    <Paragraph>
      { children }
    </Paragraph>
  </StyledSection>

export default Section;
