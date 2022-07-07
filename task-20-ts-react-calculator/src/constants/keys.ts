import {
  addDigit,
  delDigit,
  addOp,
  runOp,
  reset,
  OPERATION,
} from "../store/slice";

const {
  ADDITION,
  SUBTRACTION,
  DIVITION,
  MULTIPLICATION
} = OPERATION;

const keys = [
  { name : "7"    , action : addDigit( "7" )        , },
  { name : "8"    , action : addDigit( "8" )        , },
  { name : "9"    , action : addDigit( "9" )        , },
  { name : "DEL"  , action : delDigit()             , },

  { name : "4"    , action : addDigit( "4" )        , },
  { name : "5"    , action : addDigit( "5" )        , },
  { name : "6"    , action : addDigit( "6" )        , },
  { name : "+"    , action : addOp( ADDITION )      , },

  { name : "1"    , action : addDigit( "1" )        , },
  { name : "2"    , action : addDigit( "2" )        , },
  { name : "3"    , action : addDigit( "3" )        , },
  { name : "-"    , action : addOp( SUBTRACTION )   , },

  { name : "."    , action : addDigit( "." )        , },
  { name : "0"    , action : addDigit( "0" )        , },
  { name : "/"    , action : addOp( DIVITION )      , },
  { name : "x"    , action : addOp( MULTIPLICATION ), },

  { name : "RESET", action : reset()                , },
  { name : "="    , action : runOp()                , },
];

export { keys };
