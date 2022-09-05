import PictureProps  from "./Picture.type";
import StyledPicture from "./Picture.style";

export default ( { src, alt } : PictureProps ) =>
  <StyledPicture> <img src={ src } alt={ alt } /> </StyledPicture>
