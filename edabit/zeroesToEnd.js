#! /usr/bin/env node
"use strict"
import assert from 'node:assert';

// Write a function that moves all the zeroes to the end of an array. Do
// this without returning a copy of the input array.

// with push and pop
const zeroesToEnd1 = ( arr ) => {
  const zeroes    = [];
  const nonZeroes = [];

  let length = arr.length;
  for ( let i = 0; i < length; i++ ) {
    let e = arr.pop();

    if ( e === 0 )
      zeroes.push(e);
    else
      nonZeroes.push(e);
  }

  length = nonZeroes.length;
  for ( let i = 0; i < length; i++ )
    arr.push( nonZeroes.pop() )

  length = zeroes.length;
  for ( let i = 0; i < length; i++ )
    arr.push( zeroes.pop() )

  console.log( arr );
};

// same algorithm, but with builtin methods
const zeroesToEnd2 = ( arr ) => {
  const zeroes    = arr.filter( e => e === 0 );
  const nonZeroes = arr.filter( e => e !== 0 );

  arr.splice( 0, arr.length );

  nonZeroes.forEach( e => arr.push( e ) );
  zeroes.forEach(    e => arr.push( e ) );

  return arr;
};

// use sort
const zeroesToEnd3 = ( arr ) => {
  arr.sort( ( a, b ) => {
    if ( a === 0 ) return 1;
    if ( b === 0 ) return -1;
    return 0;
  });

  return arr;
};

// replace if with nested ternary
const zeroesToEnd4 = ( arr ) => {
  arr.sort( ( a, b ) => {
    return ( a === 0 ) ? 1 : ( ( b === 0 ) ? -1 : 0 );
  });

  return arr;
};

// the whole sort on one line
const zeroesToEnd = arr => arr.sort( ( a, b ) => !a ? 1 : !b ? -1 : 0 );

// Examples
// console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5])); // ➞ [1, 2, 4, 5, 0, 0, 0]
// console.log(zeroesToEnd([0, 0, 2, 0, 5]));       // ➞ [2, 5, 0, 0, 0]
// console.log(zeroesToEnd([4, 4, 5]));             // ➞ [4, 4, 5]
// console.log(zeroesToEnd([0, 0]));                // ➞ [0, 0]

// Notes
// You must mutate the original array.
// Keep the relative order of the non-zero elements the same.

assert.deepEqual(zeroesToEnd( [1, 2, 0, 0, 4, 0, 5] ), [1, 2, 4, 5, 0, 0, 0] );
assert.deepEqual(zeroesToEnd( [0, 0, 1, 3]          ), [1, 3, 0, 0]          );
assert.deepEqual(zeroesToEnd( [0, 0, 2, 0, 5]       ), [2, 5, 0, 0, 0]       );
assert.deepEqual(zeroesToEnd( [4, 4, 5]             ), [4, 4, 5]             );
assert.deepEqual(zeroesToEnd( [0, 0]                ), [0, 0]                );
