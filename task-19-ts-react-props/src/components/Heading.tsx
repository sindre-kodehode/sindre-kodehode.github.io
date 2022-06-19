import { ReactNode } from "react";
import styled        from "styled-components";

const StyledH2 = styled.h2`
  background     : #20232a     ;
  border-radius  : 8px 8px 0 0 ;
  color          : #61dafb     ;
  font-size      : 16px        ;
  font-weight    : 800         ;
  padding        : 16px        ;
  text-align     : center      ;
  text-transform : uppercase   ;
`;

export declare interface HeadingProps {
  children: ReactNode,
}

const Heading = ( { children }: HeadingProps ): JSX.Element =>
  <StyledH2>
    { children }
  </StyledH2>

export default Heading;
