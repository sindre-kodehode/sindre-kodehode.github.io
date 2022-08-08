import styled from "styled-components";

import type { RootState   } from "./store/store";
import type { ProductType } from "./store/productsSlice"; 

import { addToCart      } from "./store/cartSlice";
import { emptyCart      } from "./store/cartSlice";
import { removeFromCart } from "./store/cartSlice";
import { useDispatch    } from "react-redux";
import { useSelector    } from "react-redux";

const StyledApp = styled.main`
  display               : grid        ;
  grid-template-columns : 1fr 1fr 1fr ;

  & :first-child    { grid-area : 1 / span 3 ; }
  & :nth-child( 2 ) { grid-area : 2 / span 3 ; }
  & :nth-child( 3 ) { grid-area : 3 / span 3 ; }
`;

const StyledProduct = styled.section`
  & img { 
    max-width : 16rem;
    height    : 16rem;
  }
`;

const App = () => { 
  const products = useSelector(
    ( { products: { products } }: RootState ) => products
  );

  const cart = useSelector(
    ( { cart: { cart } }: RootState ) => cart
  );

  const dispatch = useDispatch();

  const handleEmptyCart = () =>
    dispatch( emptyCart() );

  const handleAddToCart = ( product: ProductType ) =>
    dispatch( addToCart( product ) );

  const handleRemoveFromCart = ( id: number ) =>
    dispatch( removeFromCart( id ) );

  return(
    <StyledApp>

      <h1> Webshop </h1>
      <ul>
        { cart.map( ({ title, id }) => 
          <li key={ id } >
            { title }
            <button onClick={ () => handleRemoveFromCart( id ) }>
              remove
            </button> 
          </li>
        )}
        <li> <button onClick={ handleEmptyCart }> empty cart </button> </li>
      </ul>
      <p> sum: $ { cart.reduce( ( sum, curr ) => sum + curr.price, 0 ) } </p>

      { products.map( product =>
        <StyledProduct key={ product.id } >
          <img src={ product.image } alt={ product.title } />
          <h3>{ product.title }</h3>
          <p>{ `$ ${ product.price }` }</p>
          <button onClick={ () => handleAddToCart( product ) }> buy </button>
        </StyledProduct>
      )}

    </StyledApp>
)};

export default App;
