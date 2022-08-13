import Button             from "../Button"             ;
import { CartItemProps }  from "./CartItem.type"       ;
import Image              from "../Image"              ;
import Price              from "../Price"              ;
import { removeFromCart } from "../../store/cartSlice" ;
import StyledSection      from "./CartItem.style"      ;
import Title              from "../Title"              ;

export default ( { product: { title, id, price, image } }: CartItemProps ) =>
  <StyledSection>
    <Image src={ image } alt={ title } />
    <Title title={ title } />
    <Price price={ price } />
    <Button text="remove" action={ removeFromCart( id ) } />
  </StyledSection>;
