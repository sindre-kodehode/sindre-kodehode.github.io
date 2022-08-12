import cartReducer        from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";

export type RootState   = ReturnType< typeof store.getState >;
export type AppDispatch = typeof store.dispatch;

export type ProductType = {
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

export default store;
