import { LinkProps } from "react-router-dom" ;
import StyledLink    from "./Link.style"     ;

export default ( { children, ...props}: LinkProps ) => <StyledLink
  { ...props }>
  { children }
</StyledLink>
