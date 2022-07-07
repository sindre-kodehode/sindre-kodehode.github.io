import { configureStore  } from "@reduxjs/toolkit";
import { slice           } from "./slice";

type RootState   = ReturnType< typeof store.getState >;
type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer : {
    calc : slice.reducer,
  },
});

export type  { RootState, AppDispatch };
export       { store };
