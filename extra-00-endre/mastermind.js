#! /usr/bin/env node
"use strict"

const colors = [
  "Blue"  , "Green" , "Grey"  , "Orange",
  "Pink"  , "Red"   , "White" , "Yellow",
];

const guess1   = [ "Red"   , "Blue"  , "White" , "White" , ];
const guess2   = [ "Pink"  , "White" , "Blue"  , "Green" , ];
const guess3   = [ "Blue"  , "Blue"  , "White" , "White" , ];

const solution = [ "Red"   , "Grey"  , "White" , "Yellow", ];

const checkGuess = ( guess, solution ) => {
  let red = 0, white = 0;

  guess.forEach( ( e, i ) =>
    e === solution[i] ? red++ : solution.includes(e) && white++ );
  
  return { Red: red, White: white };
};

console.log( checkGuess( guess1, solution ) );
console.log( checkGuess( guess2, solution ) );
console.log( checkGuess( guess3, solution ) );
