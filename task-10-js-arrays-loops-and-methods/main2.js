#! /usr/bin/env node
"use strict"

import names from "./text.js"
const result = [];

let added, index, chars = 0;
let longest = "";

for ( let name of names ) {
  index++;
  // skip odd numbers
  if ( index % 2 === 1 )      continue;
  // skip names with hyphen
  if ( name.includes( "-" ) ) continue;

  added++;
  // check for longest name
  if ( name.length > longest.length ) longest = name;
  // every 10th name to upper-case
  if ( added % 10 === 0 ) name = name.toUpperCase();

  // add ! after name
  name  += "!";
  // add length of name
  chars += name.length;

  result.push( name );
}

console.log( result );
console.log( `longest name (${longest.length} chars) : ${longest}` );
console.log( `chars in array : ${chars.toExponential()}` );
