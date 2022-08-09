import type { RootState   } from "../../store/store";

import { emptyCart      }   from "../../store/cartSlice";
import { removeFromCart }   from "../../store/cartSlice";
import { useDispatch    }   from "react-redux";
import { useSelector    }   from "react-redux";

import StyledHeader         from "./Header.style";

const Navbar = () => {
  const cart     = useSelector( ( { cart }: RootState ) => cart );
  const dispatch = useDispatch();

  const cartTotal = () =>
    cart.reduce( ( sum, curr ) => sum + curr.price, 0 ).toFixed( 2 )
  
  return (
    <StyledHeader>
      <h1> Webshop </h1>
      <p> items: { cart.length } </p>
      <button onClick={ () => dispatch( emptyCart() ) }> empty </button>
      <p> sum: $ { cartTotal() } </p>

      { cart.map( ({ title, id }) => 
        <p key={ id } >
          { title }
          <button onClick={ () => dispatch( removeFromCart( id ) ) }>
            remove
          </button> 
        </p>
      )}

    </StyledHeader>
)};

export default Navbar;
