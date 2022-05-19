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
*******************************************************************************/


/*******************************************************************************
* return a random integer between start and end argument                       * 
* if no start vale is provided, returns a random integer between 0 and end     * 
*******************************************************************************/
const randomInt = ( end, start = 0 ) => {
  return Math.floor( Math.random() * ( end - start ) ) + start;
};


/*******************************************************************************
* return three random elements from an array                                   * 
*******************************************************************************/
const threeRandoms = arr => {
  const result = [];

  for ( let i = 0; i < 3; i++ ) {
    result.push( arr.splice( randomInt( arr.length ), 1 )[0] );
  }

  return result;
};


/*******************************************************************************
* check if the hobby already is added with buldtin method includes             *
*******************************************************************************/
const randomHobbies1 = () => {
  const result = [];

  while ( result.length < 3 ) {
    const i = randomInt( hobbies.length );

    if ( !result.includes( hobbies[i].toLowerCase() ) ) {
      result.push( hobbies[i].toLowerCase() );
    }
  }

  return result;
};


/*******************************************************************************
* use Set to only accept unique hobbies                                        *
*******************************************************************************/
const randomHobbies2 = () => {
  const result = new Set();

  while ( result.size < 3 ) {
    result.add( hobbies[ randomInt( hobbies.length ) ].toLowerCase() );
  }

  return Array.from( result );
};


/*******************************************************************************
*  map all hobbies to lowercase, then filter out all the duplicates, then      * 
*  return three random hobbies from the resulting array                        * 
*******************************************************************************/
const randomHobbies3 = () => {
  let result = hobbies.map( e => e.toLowerCase() );
  result     = result.filter( ( e, i ) => hobbies.indexOf( e ) === i );

  return threeRandoms( result );
}
    

/*******************************************************************************
*  regex match every word only once and return three random hobbies            * 
*******************************************************************************/
const randomHobbies4 = () => 
  threeRandoms( hobbies.join().match( /(\w+)(?!.*\1)/gi ) );


/*******************************************************************************
* print result                                                                 *
*******************************************************************************/
console.log( names.map( name => {
  return {
    name    : name,
    age     : randomInt( 51, 18 ),
    hobbies : randomHobbies4(),
  };
}));

/*******************************************************************************
*  example:                                                                    * 
*                                                                              * 
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
