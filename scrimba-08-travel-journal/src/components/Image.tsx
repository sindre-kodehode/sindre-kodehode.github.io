import styled from "styled-components";

const StyledImageContainer = styled.section`
  border-radius : 0.5rem ;
  overflow      : hidden ;
`;

const StyledImg = styled.img`
  height     : 100%  ;
  object-fit : cover ;
  width      : 100%  ;
`;

type ImageProps = {
  alt  : string,
  src  : string,
};

const Image = ( { alt, src }:ImageProps ) =>
  <StyledImageContainer>
    <StyledImg src={ src } alt={ alt } />
  </StyledImageContainer>

export default Image;
