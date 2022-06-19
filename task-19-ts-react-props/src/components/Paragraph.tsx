import { ReactNode } from "react";
import styled        from "styled-components";

const StyledP = styled.p`
  background    : #282c34     ;
  border-radius : 0 0 8px 8px ;
  color         : #fff        ;
  padding       : 16px        ;
`;

export declare interface ParagraphProps {
  children: ReactNode,
}

const Heading = ( { children }: ParagraphProps ): JSX.Element =>
  <StyledP> { children } </StyledP>

export default Heading;
