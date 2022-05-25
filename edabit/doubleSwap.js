#! /usr/bin/env node
"use strict"

/*******************************************************************************
*  READ CAREFULLY!!                                                            * 
*                                                                              * 
*  Complete the function below to accomplish the following:                    * 
*  Return the string received in the first parameter with the following        * 
*  alterations: Any letter in the string matching charA (the second parameter  * 
*  in the function) will be replaced with charB (the third parameter) and      * 
*  VICE VERSA - meaning letters matching charA will be replaced with charB,    * 
*  and letters matching charB will be replaced with charA. See the expected    * 
*  console log comments below.                                                 * 
*******************************************************************************/
// const doubleSwap = ( string, charA, charB ) => 
//   [ ...string ].map( e => e === charA ? charB : e === charB ? charA : e ).join( "" );

// const doubleSwap = ( string, charA, charB ) =>
//   string.replaceAll( charA, "\f" ).replaceAll( charB, charA ).replaceAll( "\f", charB );

// const doubleSwap = ( string, charA, charB ) =>
//   string.split( charA ).map( e => e.split( charB ).join( charA ) ).join( charB );

const doubleSwap = ( string, charA, charB ) =>
  string.replace( RegExp( `${charA}|${charB}`, "g" ), e => e === charA ? charB : charA );

console.log(doubleSwap("this is a string", "i", "s"));
console.log(doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a"));
console.log(doubleSwap("what is the point of this?", "o", "t"));
console.log(doubleSwap("CghJh%!&hu78UHb(gb!hdsl#dakgf!dal!", "g", "!"));
console.log(doubleSwap("let's do one last test", "l", "e"));


/*******************************************************************************
*  this should log the following:                                              * 
*                                                                              * 
*  thsi si a itrsng                                                            * 
*  maybe another approach is necessary                                         * 
*  whao is ohe ptino tf ohis?                                                  * 
*  C!hJh%g&hu78UHb(!bghdsl#dak!fgdalg                                          * 
*  elt's do onl east tlst                                                      * 
*******************************************************************************/
