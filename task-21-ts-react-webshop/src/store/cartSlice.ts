import { createSlice   } from "@reduxjs/toolkit"     ;
import { PayloadAction } from "@reduxjs/toolkit"     ;
import { ProductI      } from "../type/product.type" ;

const cartSlice = createSlice( {
  name : "cart",

  initialState : JSON.parse( 
    localStorage.getItem( "cart" ) || "[]"
  ) as ProductI[],

  reducers : {
    addToCart : ( cart, { payload }: PayloadAction< ProductI > ) => {
      cart.push( { ...payload, id: Date.now() } )
      localStorage.setItem( "cart", JSON.stringify( cart ) );
    },

    removeFromCart : ( cart, { payload }: PayloadAction< number > ) => {
      cart.splice( cart.findIndex( ({ id }) => id === payload ), 1 );
      localStorage.setItem( "cart", JSON.stringify( cart ) );
    },

    emptyCart : cart => {
      cart.splice( 0 );
      localStorage.setItem( "cart", JSON.stringify( cart ) );
    },
  },
});

export const { addToCart      } = cartSlice.actions;
export const { emptyCart      } = cartSlice.actions;
export const { removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
