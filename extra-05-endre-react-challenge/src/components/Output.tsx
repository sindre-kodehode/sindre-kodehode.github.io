import { ReactNode } from "react";
import styled        from "styled-components";

const StyledOutput = styled.output`
  background    : #353b45   ;
  border        : none      ;
  border-radius : 4px       ;
  color         : #fff      ;
  font-size     : 20px      ;
  padding       : 16px 24px ;
`;

export declare interface OutputProps {
  children : ReactNode,
}

const Output = ( { children, ...props }:OutputProps ) =>
  <StyledOutput { ...props }> { children } </StyledOutput>

export default Output;
