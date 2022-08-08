import type { RootState   } from "./store/store";
import type { ProductType } from "./store/productsSlice"; 

import { addToCart      } from "./store/cartSlice";
import { emptyCart      } from "./store/cartSlice";
import { removeFromCart } from "./store/cartSlice";
import { useDispatch    } from "react-redux";
import { useSelector    } from "react-redux";

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
    <main>

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
        <section key={ product.id } >
          <img src={ product.image } alt={ product.title } />
          <h3>{ product.title }</h3>
          <p>{ `$ ${ product.price }` }</p>
          <button onClick={ () => handleAddToCart( product ) }> buy </button>
        </section>
      )}

    </main>
)};

export default App;
