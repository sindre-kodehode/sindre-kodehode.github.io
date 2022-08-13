import styled from "styled-components";

export default styled.picture`
  background    : white   ;
  height        : 100%    ;
  padding       : 1rem    ;
  width         : 100%    ;

  & img {
    height      : 100%    ;
    object-fit  : contain ;
    width       : 100%    ;
  }
`;
