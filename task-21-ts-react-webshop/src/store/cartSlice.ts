import { createSlice   } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ProductType   } from "./store";

const initialState: ProductType[] = JSON.parse( localStorage.getItem( "cart" ) || "[]" );

const saveCart = ( cart:ProductType[] ) =>
  localStorage.setItem( "cart", JSON.stringify( cart ) );

const cartSlice = createSlice( {
  name : "cart",
  initialState,
  reducers : {
    addToCart : ( cart, { payload }: PayloadAction< ProductType > ) => {
      cart.push( { ...payload, id: Date.now() } )
      saveCart( cart );
    },
    removeFromCart : ( cart, { payload }: PayloadAction< number > ) => {
      cart.splice( cart.findIndex( ({ id }) => id === payload ), 1 );
      saveCart( cart );
    },
    emptyCart : cart => {
      cart.splice( 0 );
      saveCart( cart );
    },
  },
});

export const { 
  addToCart, 
  removeFromCart,
  emptyCart
} = cartSlice.actions;

export default cartSlice.reducer;
