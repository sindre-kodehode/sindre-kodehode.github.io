import { RootState   } from "./store"
import { createSlice } from "@reduxjs/toolkit";
import {
  addDigitAction,
  delDigitAction,
  addOpAction,
  runOpAction,
  resetAction,
} from "./actions";

enum OPERATION {
  NONE,
  ADDITION,
  SUBTRACTION,
  MULTIPLICATION,
  DIVITION,
};

type StateType = {
  operation : OPERATION,
  memory    : number,
  digits    : string[],
};

const selectDigits = ( state: RootState ) =>
  state.calc.digits;

const initialState: StateType = {
  operation : OPERATION.NONE,
  memory    : 0,
  digits    : [],
};

const slice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    addDigit : addDigitAction,
    delDigit : delDigitAction,
    addOp    : addOpAction   ,
    runOp    : runOpAction   ,
    reset    : resetAction   ,
  }
});

export const { 
  addDigit,
  delDigit,
  addOp,
  runOp,
  reset
} = slice.actions;

export { 
  slice,
  selectDigits,
  OPERATION,
};

export type { StateType };
