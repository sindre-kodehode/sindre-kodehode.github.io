#! /usr/bin/env node
"use strict"


/*******************************************************************************
* names                                                                        *
*******************************************************************************/
const names = [
  "Bradley",  "Mae"   ,  "Oscar",  "Isac"   ,  "Alexandra", 
  "Margie" ,  "Rob"   ,  "Clay" ,  "Timothy",  "Kennedy"  , 
  "Rita"   ,  "Scott" ,  "Sarah",  "Felicia",  "Gill"     , 
  "Gavin"  ,  "Nellie",  "Hope" ,
];


/*******************************************************************************
* hobbies                                                                      *
*******************************************************************************/
const hobbies = [
  "cycling"  , "football", "pool"       , "jogging"      , "travelling",
  "dancing"  , "movies"  , "coffee"     , "skateboarding", "guitar"    ,
  "concerts" , "Dancing" , "movies"     , "coding"       , "games"     ,
  "Books"    , "memes"   , "electronics", "dancing"      , "boxing"    ,
  "wrestling", "mma"     , "gym"        , "cycling"      , "football"  ,
  "pool"     , "tv"      , "writing"    , "piano"        , "books"     ,
  "opera"    ,
];


/*******************************************************************************
*  Use whatever tools you deem necessary to accomplish the following:          * 
*                                                                              * 
*  Generate an object for each name in the names array formatted as follows:   * 
*  {                                                                           * 
*    name: (the name from the name array),                                     * 
*    age: (generate a random age from 18-50),                                  * 
*    hobbies: (randomly generate an array of 3 hobbies from the hobbies array  * 
*              PS make sure the hobbies are 3 unique ones)                     * 
*  }                                                                           * 
*                                                                              * 
*  example:                                                                    * 
*  {                                                                           * 
*    name: "Scott"                                                             * 
*    age: 31                                                                   * 
*    hobbies: ["books", "electronics", "guitar"]                               * 
*  }                                                                           * 
*                                                                              * 
*  Place these objects into an array.                                          * 
*                                                                              * 
*  PS: The hobbies array has to be cleaned up! Write code to remove            * 
*  duplicates before using it. Beware the capitalized duplicates as well.      * 
*                                                                              * 
*  Good luck!                                                                  * 
*******************************************************************************/

/*******************************************************************************
* return a random integer between start and end argument                       * 
* if no start vale is provided, returns a random integer between 0 and end     * 
*******************************************************************************/
const randomInt = ( end, start = 0 ) => {
  return Math.floor( Math.random() * ( end - start ) ) + start;
};


/*******************************************************************************
* return three unique random elements from an array                            * 
*******************************************************************************/
const randomHobbies1 = arr => {
  const temp = [ ... arr ];
  const result = [];

  for ( let i = 0; i < 3; i++ ) {
    // splice out a random element and push it into the result array
    result.push( temp.splice( randomInt( temp.length ), 1 )[0] );
  }

  return result;
};

// using the Fisher-Yates shuffle algorithm
const randomHobbies2 = arr => {
  const temp = [ ... arr ];

  for ( let i = 0; i < temp.length; i++ ) {
    // pick a random index
    const n = randomInt( temp.length );
    
    // swap the current index with the random one
    [ temp[i], temp[n] ] = [ temp[n], temp[i] ];
  }

  // return the last three elements in the shuffled array
  return temp.slice( -3 );
};


/*******************************************************************************
* filter methods                                                               *
*******************************************************************************/
// map all hobbies to lowercase, then filter out all the duplicates
const filterHobbies1 = arr => { 
  return arr.map( e => e.toLowerCase() )
            .filter( ( e, i ) => arr.indexOf( e ) === i );
};

// use Set to only accept unique hobbies
const filterHobbies2 = arr => [ ... new Set( arr.map( e => e.toLowerCase() ) ) ];

// regex match every word only once
const filterHobbies3 = arr => arr.join().match( /(\w+)(?!.*\1)/gi );


/*******************************************************************************
* print result                                                                 *
*******************************************************************************/
const startAge = 18;
const endAge   = 51;

console.log( names.map( name => {
  return {
    name    : name,
    age     : randomInt( endAge, startAge ),
    hobbies : randomHobbies2( filterHobbies3( hobbies ) ),
  };
}));
