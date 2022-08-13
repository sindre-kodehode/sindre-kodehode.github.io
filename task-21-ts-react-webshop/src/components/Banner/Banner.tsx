import { BannerProps } from "./Banner.type"  ;
import StyledBanner    from "./Banner.style" ;

export default ( { children, error }: BannerProps ) => <StyledBanner
  error={ error }>
  { children }
</StyledBanner>;
