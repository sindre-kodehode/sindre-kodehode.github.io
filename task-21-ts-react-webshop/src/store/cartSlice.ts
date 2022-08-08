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
    addToCart : ( state, action: PayloadAction< ProductType > ) => {
      state.cart.push( { ...action.payload, id : Date.now() } );
    },
    removeFromCart : ( state, action: PayloadAction< number > ) => {
      state.cart.splice( state.cart.findIndex( product =>
        product.id === action.payload
      ), 1 );
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
