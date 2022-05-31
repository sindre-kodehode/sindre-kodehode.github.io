#! /usr/bin/env node
"use strict"


/*******************************************************************************
*  people array                                                                *
*******************************************************************************/
const people = [{
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  }, {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing", "movies", "coffee"],
  }, {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  }, {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["coding", "games", "memes", "electronics"],
  }, {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma", "gym"],
  }, {
    name: "Chris",
    male: true,
    age: 20,
    hobbies: ["cycling", "football", "pool", "tv"],
  }, {
    name: "Claire",
    male: false,
    age: 27,
    hobbies: ["jogging", "travelling"],
  }, {
    name: "Stephanie",
    male: false,
    age: 26,
    hobbies: ["writing", "piano", "books", "opera"],
  }, {
    name: "Herman",
    male: true,
    age: 31,
    hobbies: ["gym", "weights"],
  }, {
    name: "Trevor",
    male: true,
    age: 19,
    hobbies: ["parkour"],
},];


/*******************************************************************************
*  Complete the .sort() to sort the people object array by age, from highest   * 
*  to lowest age:                                                              * 
*******************************************************************************/
people.sort( ( a, b ) => b.age - a.age );
// console.log([...people]);

/*******************************************************************************
*  the console log should read:                                                * 
*  0: {name: 'Herman', male: true, age: 31, hobbies: Array(2)}                 * 
*  1: {name: 'Avery', male: true, age: 28, hobbies: Array(4)}                  * 
*  ...                                                                         * 
*  ...                                                                         * 
*  8: {name: 'Chris', male: true, age: 20, hobbies: Array(4)}                  * 
*  9: {name: 'Trevor', male: true, age: 19, hobbies: Array(1)}                 * 
*******************************************************************************/


/*******************************************************************************
*  Complete the .sort() to sort the people object array by name length,
*  from shortest to longest:
*******************************************************************************/
people.sort( ( a, b ) => a.name.length - b.name.length  );
// console.log([...people]);


/*******************************************************************************
*  the console log should read:                                                * 
*  0: {name: 'Avery', male: true, age: 28, hobbies: Array(4)}                  * 
*  1: {name: 'Susan', male: false, age: 26, hobbies: Array(5)}                 * 
*  ...                                                                         * 
*  ...                                                                         * 
*  8: {name: 'Phillip', male: true, age: 24, hobbies: Array(4)}                * 
*  9: {name: 'Stephanie', male: false, age: 26, hobbies: Array(4)}             * 
*******************************************************************************/


/*******************************************************************************
*  Complete the .sort() to sort the people object array by amount of hobbies   * 
*  from fewest to most, and make ties sorted by name, alphabetically from      * 
*  a-z (this can be accomplished with just 1 sort method)                      * 
*******************************************************************************/
// people.sort( ( a, b ) => {
//   return a.hobbies.length - b.hobbies.length || a.name.localeCompare( b.name );
// });

people.sort( ( a, b ) => a.name > b.name ? 1 : -1 );
people.sort( ( a, b ) => a.hobbies.length - b.hobbies.length );

console.log([...people]);

/*******************************************************************************
*  this should console log the following:                                      * 
*                                                                              * 
*  0: {name: 'Trevor', male: true, age: 19, hobbies: Array(1)}                 * 
*  1: {name: 'Claire', male: false, age: 27, hobbies: Array(2)}                * 
*  2: {name: 'Herman', male: true, age: 31, hobbies: Array(2)}                 * 
*  3: {name: 'Monica', male: false, age: 21, hobbies: Array(3)}                * 
*  4: {name: 'Thomas', male: true, age: 23, hobbies: Array(3)}                 * 
*  5: {name: 'Avery', male: true, age: 28, hobbies: Array(4)}                  * 
*  6: {name: 'Chris', male: true, age: 20, hobbies: Array(4)}                  * 
*  7: {name: 'Phillip', male: true, age: 24, hobbies: Array(4)}                * 
*  8: {name: 'Stephanie', male: false, age: 26, hobbies: Array(4)}             * 
*  9: {name: 'Susan', male: false, age: 26, hobbies: Array(5)}                 * 
*******************************************************************************/
