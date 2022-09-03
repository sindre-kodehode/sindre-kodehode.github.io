#! /usr/bin/env node

/*******************************************************************************
*  1. Lag en funksjon som tar i mot et tall, sjekker om tallet er              *
*  par eller oddetall, og returner enten "Odd" eller "Even"                    *
*                                                                              *
*  f.eks:                                                                      *
*  console.log(oddOrEven(12))                                                  *
*  --> skal vise "Even" i konsollen                                            *
*                                                                              *
*  2. Skriv en funksjon som tar i mot 2 parametre:                             *
*                                                                              *
*  - Et tall, som er et klokkeslett (0 til 2359) og                            *
*  - Et navn, som er en string.                                                *
*                                                                              *
*  Funksjonen skal returne:                                                    *
*                                                                              *
*  "Good night (navn)" hvis klokkeslettet er mellom 0 og 600                   *
*  "Good morning (navn)" hvis klokkeslettet er mellom 600 og 1200              *
*  "Good afternoon (navn)" hvis klokkeslettet er mellom 1200 og 1500           *
*  "Good day (navn)" hvis klokkeslettet er mellom 1500 og 1800                 *
*  "Good evening (navn)" hvis klokkeslettet er mellom 1800 og 2359             *
*                                                                              *
*  f.eks:                                                                      *
*  console.log(greet(1251, "Gunnar"))                                          *
*  --> skal vise "Good afternoon Gunnar" i konsollen                           *
*******************************************************************************/
import assert from "node:assert";

const oddOrEven = n => n % 2 === 0 ? "Even" : "Odd";

const greet = [
/*******************************************************************************
* using a switch statement                                                     *
*******************************************************************************/
  ( time, name ) => {
    // guard clause
    if ( time <     0 ) return "Time is negative";
    if ( time >= 2400 ) return "Time is greater than 2400";

    // start with empty string
    let greeting = "";

    // set correct greeting using a switch statement
    switch ( true ) {
      case ( time > 1800 ) : greeting = "evening"   ; break ;
      case ( time > 1500 ) : greeting = "day"       ; break ;
      case ( time > 1200 ) : greeting = "afternoon" ; break ;
      case ( time > 600  ) : greeting = "morning"   ; break ;
      default              : greeting = "night"
    }

    // return greeting
    return `Good ${ greeting } ${ name }`
  },

/*******************************************************************************
* using if else statements                                                     *
*******************************************************************************/
  ( time, name ) => {
    // guard clause
    if ( time <     0 ) return "Time is negative";
    if ( time >= 2400 ) return "Time is greater than 2400";

    // start with empty string
    let greeting = "";

    // set correct greeting using if/else statements
    if      ( time > 1800 ) greeting = "evening";
    else if ( time > 1500 ) greeting = "day";
    else if ( time > 1200 ) greeting = "afternoon";
    else if ( time > 600  ) greeting = "morning";
    else                    greeting = "night";

    // return greeting
    return `Good ${ greeting } ${ name }`;
  },

/*******************************************************************************
* using nested ternary statements                                              *
*******************************************************************************/
  ( time, name ) => {
    // guard clause
    if ( time <     0 ) return "Time is negative";
    if ( time >= 2400 ) return "Time is greater than 2400";

    // return greeting using nested ternary statements
    return `Good ${ 
      time > 1800 ? "evening"   :
      time > 1500 ? "day"       :
      time > 1200 ? "afternoon" :
      time > 600  ? "morning"   :
      "night"
    } ${ name }`
  },

/*******************************************************************************
* using two arrays and a for loop                                              *
*******************************************************************************/
  ( time, name ) => {
    // guard clause
    if ( time <     0 ) return "Time is negative";
    if ( time >= 2400 ) return "Time is greater than 2400";

    // array of hours to check against
    const hours     = [ 1800, 1500, 1200, 600 ];
    // greetings in order
    const greetings = [ "evening", "day", "afternoon", "morning" ];
    // default greeting if the hour is less than 600
    let   greeting  = "night";
    
    // get each index and hour from the hours array
    for ( const [ index, hour ] of hours.entries() )
      // if time is greater than current hour in hours array,
      if ( time > hour ) { 
        // set greeting to item with same index in greetings array
        greeting = greetings[ index ];
        // and break out of loop
        break;
    }

    // return greeting
    return `Good ${ greeting } ${ name }`;
  },

/*******************************************************************************
* using find on an array of objects                                            *
*******************************************************************************/
  ( time, name ) => {
    // guard clause
    if ( time <     0 ) return "Time is negative";
    if ( time >= 2400 ) return "Time is greater than 2400";

    // extract greeting from array of objects with hour and greeting
    const { greeting } = [
      { hour : 1800, greeting : "evening"   },
      { hour : 1500, greeting : "day"       },
      { hour : 1200, greeting : "afternoon" },
      { hour :  600, greeting : "morning"   },
      { hour :    0, greeting : "night"     },
    // find first time that is larger than the hour
    ].find( ({ hour }) => time > hour );

    // return greeting
    return `Good ${ greeting } ${ name }`;
  },

/*******************************************************************************
* using an array as lookup-table                                               *
*******************************************************************************/
  ( time, name ) => {
    // guard clause
    if ( time <     0 ) return "Time is negative";
    if ( time >= 2400 ) return "Time is greater than 2400";

    // extract hour from time
    const hour = Math.floor( time / 100 );

    // fill an array of size 24 with a greeting for each hour
    const greetings = new Array( 24 )
      .fill( "night"    ,  0,  6 )
      .fill( "morning"  ,  6, 12 )
      .fill( "afternoon", 12, 15 )
      .fill( "day"      , 15, 18 )
      .fill( "evening"  , 18, 24 );

    // return greeting
    return `Good ${ greetings[ hour ] } ${ name }`;
  }
];

/*******************************************************************************
* assertions                                                                   *
*******************************************************************************/

// arrays of arguments and correct answers
const oddOrEvenAssertions = [
  { arg : 0, ans : "Even" },
  { arg : 1, ans : "Odd"  },
  { arg : 2, ans : "Even" },
  { arg : 3, ans : "Odd"  },
  { arg : 4, ans : "Even" },
  { arg : 5, ans : "Odd"  },
];

const greetAssertions = [
  { arg : -100, ans : "Time is negative"          },
  { arg :  100, ans : "Good night Endre"          },
  { arg :  700, ans : "Good morning Endre"        },
  { arg : 1300, ans : "Good afternoon Endre"      },
  { arg : 1600, ans : "Good day Endre"            },
  { arg : 1900, ans : "Good evening Endre"        },
  { arg : 2500, ans : "Time is greater than 2400" },
];

// check answer of each function
oddOrEvenAssertions.forEach( ({ arg, ans }) =>
  assert.equal( oddOrEven( arg ), ans )
);

greet.forEach( func =>
  greetAssertions.forEach( ({ arg, ans }) =>
    assert.equal( func( arg, "Endre" ), ans )
));
