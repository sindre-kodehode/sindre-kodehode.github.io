#! /usr/bin/env node
"use strict"
import assert from 'node:assert';

// Number of Boomerangs
// A boomerang is a V-shaped sequence that is either upright or upside
// down. Specifically, a boomerang can be defined as: sub-array of length
// 3, with the first and last digits being the same and the middle digit
// being different.

// Some boomerang examples:
// [3, 7, 3], [1, -1, 1], [5, 6, 5]

// Create a function that returns the total number of boomerangs in
// an array.

const countBoomerangs1 = arr => {
  let boomerangs = 0;
  for ( let i = 1; i < arr.length - 1; i++ )
    if ( arr[ i - 1 ] === arr[ i + 1 ] && arr[i] !== arr[ i + 1 ] )
      boomerangs++;

  return boomerangs;
};

// push/pop into a temp array
const countBoomerangs2 = arr => {
  const temp = [];
  let boomerangs = 0;

  temp.push( arr.pop() );
  temp.push( arr.pop() );
  temp.push( arr.pop() );

  while ( temp[ 2 ] ) {
    if ( temp[0] !== temp[1] && temp[0] === temp[2] )
      boomerangs++;

    temp.shift();
    temp.push( arr.pop() );
  }

  return boomerangs;
};

// push/pop into three temp variables
const countBoomerangs3 = arr => {
  let boomerangs = 0;

  let first  = arr.pop(); 
  let second = arr.pop();
  let third;

  while ( third = arr.pop() ) {
    if ( first !== second && first === third )
      boomerangs++;

    first  = second;
    second = third;
  }

  return boomerangs;
};

// recursive
const countBoomerangs4 = arr => {
  if ( arr.length === 3 )
    return ( arr[0] !== arr[1] && arr[0] === arr[2] ) ? 1 : 0;
  else
    return countBoomerangs( arr.slice( 0, 3 ) ) + countBoomerangs( arr.slice( 1 ) );
};

// regex
const countBoomerangs = arr => {
  return [ ... arr.join( "" ).matchAll( /(-?\d)(?!\1)(?=-?\d\1)/g ) ].length;
};

// To illustrate:
// [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]

// Be aware that boomerangs can overlap, like so:
// [1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1],
// [7, 1, 7], and [1, 7, 1]

// Examples
// console.log( countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ); // ➞ 2
// console.log( countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ); // ➞ 1
// console.log( countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ); // ➞ 0

// Notes
// [5, 5, 5] (triple identical digits) is NOT considered a boomerang
// because the middle digit is identical to the first and last.

assert.equal(countBoomerangs([9, 5, 9, 5, 1, 1, 1]), 2)
assert.equal(countBoomerangs([5, 6, 6, 7, 6, 3, 9]), 1)
assert.equal(countBoomerangs([4, 4, 4, 9, 9, 9, 9]), 0)
assert.equal(countBoomerangs([5, 9, 5, 9, 5]), 3)
assert.equal(countBoomerangs([4, 4, 4, 8, 4, 8, 4]), 3)
assert.equal(countBoomerangs([2, 2, 2, 2, 2, 2, 3]), 0)
assert.equal(countBoomerangs([2, 2, 2, 2, 3, 2, 3]), 2)
assert.equal(countBoomerangs([1, 2, 1, 1, 1, 2, 1]), 2)
assert.equal(countBoomerangs([5, 1, 1, 1, 1, 4, 1]), 1)
assert.equal(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]), 3)
assert.equal(countBoomerangs([1, 7, 1, 7, 1, 7, 1]), 5)
assert.equal(countBoomerangs([5, 5, 5]), 0)
