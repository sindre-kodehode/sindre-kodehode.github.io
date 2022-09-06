import PictureProps  from "./Picture.type";
import StyledPicture from "./Picture.style";

export default ( { src, alt, url } : PictureProps ) =>
  <StyledPicture> 
    <a href={ url }>
      <img src={ src } alt={ alt } />
    </a>
  </StyledPicture>
