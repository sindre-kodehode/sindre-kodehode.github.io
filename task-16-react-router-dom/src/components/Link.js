import styled, { css }        from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const StyledLink = styled( RouterLink )`
  ${ ({ nav }) => nav && css`
     text-decoration : none ;
     color           : #fff ;
     height          : 32px ;

     &:hover { color : #61dafb ; }
   `}
`;

export default function Link( props ) {
  return <StyledLink { ...props } />;
}
