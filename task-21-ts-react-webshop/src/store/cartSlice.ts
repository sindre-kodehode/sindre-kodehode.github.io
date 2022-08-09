import { createSlice   } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ProductType   } from "./productsSlice";

type CartState = {
  cart : ProductType[],
}

const initialState: CartState = {
  cart : JSON.parse( localStorage.getItem( "cart" ) || "[]" ),
};

const cartSlice = createSlice( {
  name : "cart",
  initialState,
  reducers : {
    addToCart : ( state, action: PayloadAction< ProductType > ) => {
      state.cart.push( { ...action.payload, id : Date.now() } );
      localStorage.setItem( "cart", JSON.stringify( state.cart ) );
    },
    removeFromCart : ( state, action: PayloadAction< number > ) => {
      state.cart = state.cart.filter( ({ id }) => id !== action.payload );
      localStorage.setItem( "cart", JSON.stringify( state.cart ) );
    },
    emptyCart : state => {
      state.cart = [];
      localStorage.setItem( "cart", JSON.stringify( state.cart ) );
    },
  },
});

export const { 
  addToCart, 
  removeFromCart,
  emptyCart
} = cartSlice.actions;

export default cartSlice.reducer;
