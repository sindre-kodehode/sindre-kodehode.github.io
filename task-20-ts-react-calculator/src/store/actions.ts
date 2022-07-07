import { OPERATION, StateType } from "./slice";
import { PayloadAction } from "@reduxjs/toolkit";

const addDigitAction = ( state: StateType, action: PayloadAction< string > ) => {
  state.digits = [ ...state.digits, action.payload ]
};

const delDigitAction = ( state: StateType ) => {
  state.digits = state.digits.slice( 0, -1 );
};

const addOpAction = ( state: StateType, action: PayloadAction< OPERATION > ) => {
  state.operation = action.payload; 
  state.memory    = +state.digits.join( "" );
  state.digits    = [];
};

const runOpAction = ( state: StateType ) => {
  let result: number = 0;

  switch ( state.operation ) {
    case OPERATION.ADDITION :
      result = state.memory + ( +state.digits.join( "" ) ); break;

    case OPERATION.SUBTRACTION :
      result = state.memory - ( +state.digits.join( "" ) ); break;

    case OPERATION.MULTIPLICATION :
      result = state.memory * ( +state.digits.join( "" ) ); break;

    case OPERATION.DIVITION :
      result = state.memory / ( +state.digits.join( "" ) ); break;
  }
  
  state.digits = [ ...String( result ) ];
  state.operation = OPERATION.NONE;
  state.memory    = 0;
};

const resetAction = ( state: StateType ) => {
  state.digits    = [];
  state.operation = OPERATION.NONE;
  state.memory    = 0;
}

export { 
  addDigitAction,
  delDigitAction,
  addOpAction,
  runOpAction,
  resetAction,
};
