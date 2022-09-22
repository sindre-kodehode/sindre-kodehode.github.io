#! /usr/bin/env node

const ratio = ( diameter, price ) =>
  ( price / ( Math.PI * Math.pow( ( diameter / 2 ), 2 ) ) ).toFixed( 2 );

const percent = ( a, b ) =>
  `+${ ( 100 - a / b * 100 ).toFixed( 2 ) }%`.padStart( 7, " " );

let large  = ratio( 40, 209 );
let medium = ratio( 30, 159 );
let small  = ratio( 20, 65  );

console.log( "med skorve" );
console.log( "large  :", large , percent( large, large  ) );
console.log( "medium :", medium, percent( large, medium ) );
console.log( "small  :", small , percent( large, small  ) );

large  = ratio( 40 - 4, 209 );
medium = ratio( 30 - 4, 159 );
small  = ratio( 20 - 4, 65  );

console.log( "\nuten skorve" );
console.log( "large  :", large , percent( large, large  ) );
console.log( "medium :", medium, percent( large, medium ) );
console.log( "small  :", small , percent( large, small  ) );
