import StyledH3  from "./Tags.style";
import TagsProps from "./Tags.type";

export default ( { tags } : TagsProps ) =>
  <StyledH3> # { tags.join( ", " ) } </StyledH3>
