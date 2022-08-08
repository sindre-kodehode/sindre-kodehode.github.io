import { configureStore } from "@reduxjs/toolkit";
import productsReducer    from "./productsSlice";
import cartReducer        from "./cartSlice";

const store = configureStore({
  reducer : {
    products : productsReducer,
    cart     : cartReducer,
  },
});

type RootState = ReturnType< typeof store.getState >;
type AppDispatch = typeof store.dispatch;

export type { RootState, AppDispatch };
export { store };
