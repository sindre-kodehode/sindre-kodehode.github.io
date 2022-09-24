#! /usr/bin/env node 

const fib = n => n && n + fib( --n );

const fib2 = n => {
  let temp1 = 1, temp2 = 0, sum = 0;
 
  for ( let i = 1; i < n; i++ ) {
    sum   = temp1 + temp2;
    temp2 = temp1;
    temp1 = sum;
  }
 
  return sum;
}

const fib3 = n => {
  const result = Array( n + 1 );
  result[0] = 0;
  result[1] = 1;
 
  for ( let i = 2; i <= n; i++ )
    result[i] = result[ i - 1 ] + result[ i - 2 ];
 
  return result[ n ];
}

console.log( fib3( 10 ) );
