import styled from "styled-components";

const StyledCard = styled.div`
  background    : #282c34 ;
  border-radius : 16px    ;
  min-width     : 128px   ;
`;

const Card = ({ children, ...props }) =>
  <StyledCard {...props }> { children } </StyledCard>;

export default Card;
