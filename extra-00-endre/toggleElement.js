#! /usr/bin/env node
"use strict"
import assert from "node:assert"

/*******************************************************************************
*  Write a function that takes in 2 parameters, 1 array and 1 string.          *
*  Inside your function, check if the array received contains the string       *
*  received. If it does, remove that element from the array and return it.     *
*  If the array does not contain the string, add that string to the end of     *
*  the array and return it.                                                    *
*                                                                              *
*  Examples:                                                                   *
*  console.log( yourFunction( [ "Red", "Green" ], "Blue" ) )                   *
*     --> ["Red", "Green", "Blue"]                                             *
*  console.log( yourFunction( [ "Red", "Green", "Blue" ], "Green" ) )          *
*     --> ["Red", "Blue"]                                                      *
*******************************************************************************/

const toggleElement = [
  // ** using reduce ** //
  ( arr, str ) => {
    const init = { found : false, result : [], last : arr.length - 1 };

    return arr.reduce( ( acc, curr, index ) => {
      let result = ( curr === str )
                 ? { ...acc, found : true }
                 : { ...acc, result : [ ...acc.result, curr ] };

      if ( index === acc.last && !result.found )
        return { ...result, result : [ ...result.result, str ] };

      return result;
    }, init ).result;
  },

  // ** using a for loop ** //
  ( arr, str ) => {
    let   found  = false;
    const result = [];

    for ( const s of arr ) {
      if ( s === str )
        found = true;
      else
        result.push( s );
    }

    if ( !found ) result.push( str )
    
    return result;
  },

  // ** using filter ** //
  ( arr, str ) => {
    const notEqual = s => s !== str;

    const filteredArr = arr.filter( notEqual );

    if ( filteredArr.length === arr.length )
      return [ ...filteredArr, str ];

    return filteredArr;
  },

  // ** using find and filter ** //
  ( arr, str ) => {
    const notEqual = s => s !== str;

    const found = arr.includes( str );

    if ( found )
      return arr.filter( notEqual );

    return [ ...arr, str ];
  },

  // ** as a one-liner ** //
  ( a, s ) => a.includes( s ) ? a.filter( e => e !== s ) : [ ...a, s ],

  // ** functional style ** //
  ( arr, str ) => {
    const has    = str => arr.includes( str );
    const remove = str => arr.filter( e => e !== str )
    const add    = str => [ ...arr, str ];

    return has( str ) ? remove( str ) : add( str )
  },

  // ** using findIndex and splice or push ** //
  // ** WARINING: mutates the array ** //
  ( arr, str ) => {
    const index = arr.findIndex( e => e === str );

    if ( index !== -1 )
      arr.splice( index, 1 );
    else
      arr.push( str );

    return arr;
  },
];


/*******************************************************************************
*  tests                                                                       *
*******************************************************************************/
const tests = [
  [ 
    [ [ "Red", "Green" ], "Blue" ],
    [ "Red", "Green", "Blue" ],
  ],
  [
    [ [ "Red", "Green", "Blue" ], "Green" ],
    [ "Red", "Blue" ],
  ]
];

tests.forEach( ([ input, expected ]) =>
  assert.deepEqual( toggleElement[0]( ...input ), expected ) )
