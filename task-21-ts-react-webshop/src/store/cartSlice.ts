import { createSlice   } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ProductType   } from "./productsSlice";

type CartState = {
  cart : ProductType[],
}

const initialState: CartState = {
  cart : [],
};

const cartSlice = createSlice( {
  name : "cart",
  initialState,
  reducers : {
    addToCart : ( { cart }, action: PayloadAction< ProductType > ) => {
      cart.push( { ...action.payload, id : Date.now() } );
    },
    removeFromCart : ( state, action: PayloadAction< number > ) => {
      state.cart = state.cart.filter( ({ id }) => id !== action.payload );
    },
    emptyCart : state => {
      state.cart = [];
    },
  },
});

export const { 
  addToCart, 
  removeFromCart,
  emptyCart
} = cartSlice.actions;

export default cartSlice.reducer;
