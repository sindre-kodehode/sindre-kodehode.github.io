import CartBanner         from "../CartBanner"         ;
import CartItem           from "../CartItem"           ;
import { RootState      } from "../../store/store"     ;
import StyledCart         from "./Cart.style"          ;
import { useSelector    } from "react-redux"           ;

export default () => {
  const cart = useSelector( ( { cart }: RootState ) => cart );

  const cartTotal = () =>
    cart.reduce( ( sum, product ) => sum + product.price, 0 ).toFixed( 2 )
  
  return <>
    <CartBanner items={ cart.length } total={ cartTotal() } />

    <StyledCart> {
      cart.map( product => 
        <CartItem product={ product } />
    )} </StyledCart>
  </>
};
