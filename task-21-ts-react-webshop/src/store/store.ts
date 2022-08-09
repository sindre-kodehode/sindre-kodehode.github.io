import { configureStore } from "@reduxjs/toolkit";
import cartReducer        from "./cartSlice";

type ProductType = {
  "id"          : number,
  "title"       : string,
  "price"       : number,
  "description" : string,
  "category"    : string,
  "image"       : string,
  "rating" : {
    "rate"      : number,
    "count"     : number,
  }
};


const store = configureStore({
  reducer : {
    cart     : cartReducer,
  },
});

type RootState = ReturnType< typeof store.getState >;
type AppDispatch = typeof store.dispatch;

export type { RootState, AppDispatch, ProductType };
export { store };
