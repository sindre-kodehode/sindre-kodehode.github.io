import HeaderProps  from "./Header.type";
import StyledHeader from "./Header.style";

export default ( { text } : HeaderProps ) =>
  <StyledHeader> <h1>{ text }</h1> </StyledHeader>
