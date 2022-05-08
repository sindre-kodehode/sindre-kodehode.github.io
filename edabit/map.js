#! /usr/bin/env node
"use strict"

const numArray = [32, 11, 4, 67, 97, 61, 52, 12, 26, 8, 70, 23];
 
const mappedArray = numArray.map( number => {
  if ( number > 50 )
    return number * 5;
  else
    return number * 10;
});

const mappedArray2 = numArray.map( e => ( e > 50 ) ? ( e * 5 ) : ( e * 10 ) );
 
console.log(mappedArray);
 
//fullfør .map method funksjonen:
//hvis tallet er over 50, return tallet ganget med 5,
//hvis tallet er under 50, return tallet ganget med 10
 
// consol skal logge dette hvis du har gjort rett:
// Array(12)
// 0: 320
// 1: 110
// 2: 40
// 3: 335
// 4: 485
// 5: 305
// 6: 260
// 7: 120
// 8: 260
// 9: 80
// 10: 350
// 11: 230
