import { ImageProps } from "./Image.type"  ;
import StyledPicture  from "./Image.style" ;

export default ( { src, alt }: ImageProps) => <StyledPicture>
  <img src={ src } alt={ alt } />
</StyledPicture>;
