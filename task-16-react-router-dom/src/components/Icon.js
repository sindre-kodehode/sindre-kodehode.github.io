import styled, { css } from "styled-components";
import reactLogo       from "../img/react-logo.png";

const ReactLogo = styled.img`
  ${ ({ large }) => large && css`
    height : 64px ;
    width  : 64px ;  
  `}
  ${ ({ medium }) => medium && css`
    height : 32px ;
    width  : 32px ;  
  `}
  ${ ({ small }) => small && css`
    height : 16px ;
    width  : 16px ;  
  `}
`;

export default function Icon({ react, ...props }) {
  const src = react ? reactLogo : "";

  return <ReactLogo { ...props } src={ src } />;
}
