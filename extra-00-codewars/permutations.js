#! /usr/bin/env node
"use strict"
import assert from "node:assert"
import { randomInt } from "node:crypto";

/*******************************************************************************
*  In this kata you have to create all permutations of a non empty input       *
*  string and remove duplicates, if present. This means, you have to shuffle   *
*  all letters from the input in all possible orders.                          *
*                                                                              *
*  Examples:                                                                   *
*  With input 'a'                                                              *
*  Your function should return: ['a']                                          *
*  With input 'ab'                                                             *
*  Your function should return ['ab', 'ba']                                    *
*  With input 'aabb'                                                           *
*  Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba',        *
*  'bbaa']                                                                     *
*  The order of the permutations doesn't matter.                               *
*******************************************************************************/

const permutations = [
/*******************************************************************************
*  add random elements                                                         *
*******************************************************************************/
  ( str ) => {
    // function for finding the factorial
    const fac = n => n ? n * fac( --n ) : 1;

    // make an object containing the frequency of each element
    const freq = [ ...str ]
      .reduce( ( acc, e ) => ({ ...acc, [e] : acc[e] + 1 || 1 }), {} );

    // divide the length of the string factorial divided by
    // frequency of all elements factorial
    const n = Object.values( freq )
      .reduce( ( acc, e ) => acc / fac( e ), fac( str.length ) );

    // a set to store only unique permutations
    const perm = new Set();

    // loop until all unique permutations have been found
    while ( perm.size < n )
      perm.add( [ ...str ].sort( _ => Math.random() - 0.5 ).join`` );
    
    // return array of strings, sorted
    return [ ...perm ].sort();
  },

/*******************************************************************************
*  find all the permutations for n - 1, then copy them n times and insert      *
*  the next character in between the others, in all the places                 *
*******************************************************************************/
  ( str ) => {
    let res = [ "" ];

    // loop over each character in str
    [ ...str ].forEach( ( char, i ) =>

      // copy previous array i + 1 times
      res = Array( ++i ).fill( [ ...res ] ).flat().sort()

      // for each splice next char in between the others i times
      .map( ( e, j ) => e.slice( 0, j % i ) + char + e.slice( j % i )
    ));

    // return only unique permutations, sorted
    return [ ...new Set( res ) ].sort();
  },

/*******************************************************************************
*  "one-liner"                                                                 *
*******************************************************************************/
  A => [ ...new Set(
    [ ...A ].reduce( ( B, c, i ) =>
      Array( ++i ).fill( [ ...B ] ).flat().sort()
      .map( ( e, j ) =>
        e.slice( 0, j % i ) + c + e.slice( j % i ))
    ,[ "" ] )
  )].sort()
  ,

/*******************************************************************************
*  using lexicographically ordering                                            *
*******************************************************************************/
  ( str ) => {
    const result = [];

    // sort elements to find lexicographically minimal permutation
    let a = [ ...str ].sort();

    while ( true ) {
      // add current permutation as a string to result
      result.push( a.join`` );

      // Find the largest index k such that a[k] < a[k + 1]
      const k = a.findLastIndex( ( _, k ) => a[k] < a[ k + 1 ] );

      // If no such index exists, the permutation is the last permutation
      if ( k === -1 ) break;

      // Find the largest index l greater than k such that a[k] < a[l]
      const l = a.findLastIndex( ( _, l ) => a[k] < a[l] );

      // Swap the value of a[k] with that of a[l]
      [ a[k], a[l] ] = [ a[l], a[k] ];

      // Reverse the sequence from a[ k + 1 ] up to and including the final
      // element
      a = [ ...a.slice( 0, k + 1 ), ...a.slice( k + 1 ).reverse() ];
    }

    return result;
  },

];

/*******************************************************************************
*  tests                                                                       *
*******************************************************************************/
const abcd = [
  'abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb', 'bacd', 'badc', 'bcad',
  'bcda', 'bdac', 'bdca', 'cabd', 'cadb', 'cbad', 'cbda', 'cdab', 'cdba',
  'dabc', 'dacb', 'dbac', 'dbca', 'dcab', 'dcba'
];

const tests = [
  [     'a', [ 'a' ]                                            ],
  [    'ab', [ 'ab', 'ba' ]                                     ],
  [   'abc', [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]       ],

  [  'abcd', abcd                                               ],
  [  'bcad', abcd                                               ],
  [  'dcba', abcd                                               ],

  [    'aa', [ 'aa' ]                                           ],
  [  'aabb', [ 'aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa' ] ],
  [ 'aaaab', [ 'aaaab', 'aaaba', 'aabaa', 'abaaa', 'baaaa' ]    ],
];

permutations.forEach( func =>
  tests.forEach( ([ input, expected ]) =>
    assert.deepEqual( func( input ), expected )
));
