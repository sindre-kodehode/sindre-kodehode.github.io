import StyledCart         from "./Cart.style"

import { emptyCart      } from "../../store/cartSlice";
import { removeFromCart } from "../../store/cartSlice";
import type { RootState } from "../../store/store";
import { useDispatch    } from "react-redux";
import { useSelector    } from "react-redux";

export default () => {
  const cart     = useSelector( ( { cart }: RootState ) => cart );
  const dispatch = useDispatch();

  const cartTotal = () =>
    cart.reduce( ( sum, product ) => sum + product.price, 0 ).toFixed( 2 )
  
  return <StyledCart>
    <p> items: { cart.length } </p>
    <p> total: $ { cartTotal() } </p>

    <button onClick={ () => dispatch( emptyCart() ) }> empty cart </button>

    <ul>
      { cart.map( ({ title, id, price }) => 
        <li key={ id } >
          <button onClick={ () => dispatch( removeFromCart( id ) ) }>
            remove
          </button> 

          $ { price }

          { title }
        </li>
      )}
    </ul>
  </StyledCart>
};
