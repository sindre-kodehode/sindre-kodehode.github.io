#! /usr/bin/env node
"use strict"

const fruits = [
  "Banana",
  "Apple",
  "Pear",
  "Mango",
  "Melon",
  "Pineapple",
  "Grapes",
  "Peach",
];

// Complete the .map method to return 1 random character from each
// element in uppercase.
const mappedFruits = fruits.map( fruit => 
  fruit[ Math.floor( Math.random() * fruit.length ) ].toUpperCase()
);

console.log( mappedFruits );

// This should log something like this:
// (8) ['A', 'P', 'E', 'M', 'E', 'E', 'R', 'H']
