import { createSlice   } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ProductType   } from "./store";

const initialState: ProductType[] = JSON.parse( 
  localStorage.getItem( "cart" ) || "[]"
);

const cartSlice = createSlice( {
  name : "cart",
  initialState,
  reducers : {
    addToCart : ( cart, { payload }: PayloadAction< ProductType > ) => {
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

export const { 
  addToCart, 
  removeFromCart,
  emptyCart
} = cartSlice.actions;

export default cartSlice.reducer;
