"use strict";
import assert from "node:assert";

const halfString1 = str => {
  if ( str.length === 0 ) return [];
  if ( str.length === 1 ) return [ str[0] ];

  const halfLength = str.length / 2;

  const result   = [];
  let firstHalf  = "";
  let secondHalf = "";

  for ( let i = 0; i < Math.floor( halfLength ); i++ )
    firstHalf += str[i];

  for ( let i = Math.ceil( halfLength ); i < str.length; i++ )
    secondHalf += str[i];

  result.push( firstHalf );

  if ( str.length % 2 )
    result.push( str[ Math.floor( halfLength ) ] );
    
  result.push( secondHalf );

  return result;
};

const halfString2 = ( str, half=str.length / 2 ) => [
  str.slice( 0, half    ) || [],
  str      [ half - 0.5 ] || [],
  str.slice( half + 0.5 ) || [],
].flat();

console.log( "-".repeat( 80 ) );

assert.deepStrictEqual( halfString1( ""      ), [                  ]);
assert.deepStrictEqual( halfString1( "o"     ), [       "o"        ]);
assert.deepStrictEqual( halfString1( "xx"    ), [ "x" ,       "x"  ]);
assert.deepStrictEqual( halfString1( "xox"   ), [ "x" , "o" , "x"  ]);
assert.deepStrictEqual( halfString1( "xxxx"  ), [ "xx",       "xx" ]);
assert.deepStrictEqual( halfString1( "xxoxx" ), [ "xx", "o" , "xx" ]);

console.log( "Success" );
