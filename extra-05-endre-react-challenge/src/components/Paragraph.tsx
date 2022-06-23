import { ReactNode } from "react";
import styled        from "styled-components";

const StyledDiv = styled.div`
  background      : #282c34     ;
  border-radius   : 0 0 8px 8px ;
  color           : #fff        ;
  display         : flex        ;
  gap             : 32px        ;
  justify-content : center      ;
  padding         : 16px        ;
`;

export declare interface ParagraphProps {
  children: ReactNode,
}

const Paragraph = ( { children }: ParagraphProps ): JSX.Element =>
  <StyledDiv> { children } </StyledDiv>

export default Paragraph;
