import StyledHeader   from "./Title.style" ;
import { TitleProps } from "./Title.type"  ;

export default ( { title }: TitleProps ) => <StyledHeader>
  { title }
</StyledHeader>;
