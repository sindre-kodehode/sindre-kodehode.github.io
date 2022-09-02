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

const oddOrEven = n => n % 2 === 0 ? "Even" : "Odd";

const greet = ( time, name ) => {
  let greeting = "";

  switch ( true ) {
    case ( time > 1800 ) : greeting = "evening"   ; break ;
    case ( time > 1500 ) : greeting = "day"       ; break ;
    case ( time > 1200 ) : greeting = "afternoon" ; break ;
    case ( time > 600  ) : greeting = "morning"   ; break ;
    default              : greeting = "night"
  }

  return `Good ${ greeting } ${ name }`
};

const greet2 = ( time, name ) => {
  let greeting = "";

  if      ( time > 1800 ) greeting = "evening";
  else if ( time > 1500 ) greeting = "day";
  else if ( time > 1200 ) greeting = "afternoon";
  else if ( time > 600  ) greeting = "morning";
  else                    greeting = "night";

  return `Good ${ greeting } ${ name }`;
};

const greet3 = ( time, name ) =>
  `Good ${ 
    time > 1800 ? "evening"   :
    time > 1500 ? "day"       :
    time > 1200 ? "afternoon" :
    time > 600  ? "morning"   :
    "night"
  } ${ name }`;

const greet4 = ( time, name ) => {
  const times     = [ 1800, 1500, 1200, 600 ];
  const greetings = [ "evening", "day", "afternoon", "morning" ];
  let   greeting  = "night";
  
  for ( const [ i, t ] of times.entries() )
    if ( time > t ) { greeting = greetings[i]; break; }

  return `Good ${ greeting } ${ name }`;
};

const greet5 = ( t, n ) => {
  const { greeting } = [
    { time : 1800, greeting : "evening"   },
    { time : 1500, greeting : "day"       },
    { time : 1200, greeting : "afternoon" },
    { time :  600, greeting : "morning"   },
    { time :    0, greeting : "night"     },
  ].find( ({ time }) => t > time );

  return `Good ${ greeting } ${ n }`;
}

console.log( greet4(  100, "Endre" ) );
console.log( greet4(  700, "Endre" ) );
console.log( greet4( 1300, "Endre" ) );
console.log( greet4( 1600, "Endre" ) );
console.log( greet4( 1900, "Endre" ) );
