import Button               from "../Button"             ;
import { CartBannerProps }  from "./CartBanner.type"     ;
import { emptyCart       }  from "../../store/cartSlice" ;
import StyledCartBanner     from "./CartBanner.style"    ;

export default ( { total, items }: CartBannerProps ) => <StyledCartBanner>
  <h3>items:   { items }</h3>
  <h3>total: $ { total }</h3>
  <Button action={ emptyCart() } text="Empty Cart" />
</StyledCartBanner>;
