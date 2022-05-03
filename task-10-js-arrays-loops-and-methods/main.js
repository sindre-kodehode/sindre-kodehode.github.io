#! /usr/bin/env node
"use strict"

import names from "./text.js"
let result = [];

/*******************************************************************************
* 1. Fjern alle navn fra arrayet som har index som er oddetall                 *
*******************************************************************************/
console.log( "-- Task 1 ".padEnd( 80, "-") )

result = names.filter(
  ( _, i ) => i % 2 === 0
);

console.log( result );

/* with a for loop */
// for ( let i = 0; i < names.length; i++ )
//   if ( i % 2 === 0)
//     result.push( names[i] );


/*******************************************************************************
* 2. Skriv kode som finner det lengste navnet i arrayet                        *
*******************************************************************************/
console.log( "\n-- Task 2 ".padEnd( 81, "-") )

result = Array.from( names ).sort( 
  ( a, b ) => b.length - a.length
);

let longest = result[0];

console.log( `longest name (${longest.length} chars) : ${longest}` );

/* makes an array of arrays with the index of the second array indicating */
/* how many characters there are in the name.                             */
// result = [];
//
// for ( let name of names ) {
//   const length = name.length;
//
//   if ( typeof result[length] === "undefined" ) {
//     result[length] = [];
//   }
//   result[length].push( name );
// }
//
// console.log( `longest name (${result.at( -1 )[0].length} chars) : ${result.at( -1)}` );


/*******************************************************************************
* 3. Utfør disse oppgavene ved å bruke bare 1 loop                             *
*   1) Gjør hvert tiende navn om til store bokstaver                           *
*   2) Legg til et utropstegn etter hvert navn                                 *
*   3) Fjern alle navn som inneholder en bindestrek                            *
*******************************************************************************/
console.log( "\n-- Task 3 ".padEnd( 81, "-") )

result = [];
let added = 0;

for ( let name of names ) {
  if ( name.includes( "-" ) )
    continue;

  if ( ++added % 10 === 0 )
    name = name.toUpperCase();

  result.push( name + "!" );
}

console.log( result );

/* with builtin methods */
// const addExclamation = name => name + "!";
// const removeHyphen   = name => !name.includes( "-" );
//
// const toUpperModuloTen = ( name, index ) => {
//   return index % 10 === 0 ? name.toUpperCase() : name
// };
//
// console.log( names.filter( removeHyphen ).map( toUpperModuloTen ).map( addExclamation ) );


/*******************************************************************************
*  4. Finn antall tegn i arrayet og vis dette tallet i vitenskapelig notasjon  *
*******************************************************************************/
console.log( "\n-- Task 4 ".padEnd( 81, "-") )

let chars = names.join().length.toExponential();

console.log( `chars in names array : ${chars}` );


/*******************************************************************************
*  bonus: do everything in one loop!                                           *
*******************************************************************************/
console.log( "\n-- Bonus ".padEnd( 81, "-") )

result = [];

added = 0;
chars = 0;
longest = "";

for ( let [ index, name ] of names.entries() ) {
  if ( index % 2 !== 0 || name.includes( "-" ) )
    continue;

  if ( ++added % 10 === 0 )
    name = name.toUpperCase();

  if ( name.length > longest.length )
    longest = name;

  chars += name.length + 1;
  result.push( name + "!" );
}

console.log( result );
console.log( `longest name (${longest.length} chars) : ${longest}` );
console.log( `chars in array : ${chars.toExponential()}` );


/*******************************************************************************
* output:                                                                      *
-- Task 1 ----------------------------------------------------------------------
[
  'Aaran',        'Aarez',      'Aaron',      'Aarron',     'Aaryn',
  'Aazaan',       'Abbas',      'Abdalroof',  'Abdirahman', 'Abdul',
  'Abdulbasir',   'Abdulkarem', 'Abdullah',   'Abdulmalik', 'Abdur',
  'Abdur-Rahman', 'Abel',       'Abhisumant', 'Abir',       'Abu',
  'Ace',          'Adam',       'Addison',    'Adegbola',   'Aden',
  'Adie',         'Aditya',     'Adrian',     'Aedan',      'Aedyn',
  'Afonso',       'Ahmed',      'Ahoua',      'Aiadan',     'Aiden',
  'Aiden-Vee',    'Aidy',       'Aiman',      'Ainslie',    'Airidas',
  'AJ',           'A-Jay',      'Akan',       'Al',         'Alan',
  'Alasdair',     'Alber',      'Albie',      'Alec',       'Aleem',
  'Aleksander',   'Aleksandrs', 'Alessandro', 'Alex',       'Alexei',
  'Alexzander',   'Alfee',      'Alfred',     'Alhaji',     'Ali',
  'Alieu',        'Alisdair',   'Alistair',   'Alister',    'Allan',
  'Allen',        'Allister',   'Alphonse',   'Alum',       'Alvin',
  'Amaan',        'Amani',      'Ameer',      'Ami',        'Amir',
  'Ammar',        'Amolpreet',  'Amrinder',   'Amro',       'Andrea',
  'Andrei',       'Andrew',     'Anees',      'Angel',      'Angus',
  'Anis',         'Anmolpreet', 'Anndra',     'Anthony',    'Antoine',
  'Antoni',       'Antony',     'Anubhav',    'Aon',        'Apisai',
  'Aran',         'Arann',      'Arayan',     'Archie',     'Ardal',
  ... 1269 more items
]

-- Task 2 ----------------------------------------------------------------------
longest name (17 chars) : Michael-Alexander

-- Task 3 ----------------------------------------------------------------------
[
  'Aaran!',       'Aaren!',       'Aarez!',      'Aarman!',     'Aaron!',
  'Aarron!',      'Aaryan!',      'Aaryn!',      'Aayan!',      'AAZAAN!',
  'Abaan!',       'Abbas!',       'Abdallah!',   'Abdalroof!',  'Abdihakim!',
  'Abdirahman!',  'Abdisalam!',   'Abdul!',      'Abdulbasir!', 'ABDULKADIR!',
  'Abdulkarem!',  'Abdulkhader!', 'Abdullah!',   'Abdulmalik!', 'Abdur!',
  'Abdurraheem!', 'Abel!',        'Abhinav!',    'Abhisumant!', 'ABID!',
  'Abir!',        'Abraham!',     'Abu!',        'Abubakar!',   'Ace!',
  'Adain!',       'Adam!',        'Addison!',    'Addisson!',   'ADEGBOLA!',
  'Adegbolahan!', 'Aden!',        'Adenn!',      'Adie!',       'Adil!',
  'Aditya!',      'Adnan!',       'Adrian!',     'Adrien!',     'AEDAN!',
  'Aedin!',       'Aedyn!',       'Aeron!',      'Afonso!',     'Ahmad!',
  'Ahmed!',       'Ahoua!',       'Ahtasham!',   'Aiadan!',     'AIDAN!',
  'Aiden!',       'Aidian!',      'Aidy!',       'Ailin!',      'Aiman!',
  'Ainsley!',     'Ainslie!',     'Airen!',      'Airidas!',    'AIRLIE!',
  'AJ!',          'Ajay!',        'Ajayraj!',    'Akan!',       'Akram!',
  'Al!',          'Ala!',         'Alan!',       'Alanas!',     'ALASDAIR!',
  'Alastair!',    'Alber!',       'Albert!',     'Albie!',      'Aldred!',
  'Alec!',        'Aled!',        'Aleem!',      'Aleksandar!', 'ALEKSANDER!',
  'Aleksandr!',   'Aleksandrs!',  'Alekzander!', 'Alessandro!', 'Alessio!',
  'Alex!',        'Alexander!',   'Alexei!',     'Alexx!',      'ALEXZANDER!',
  ... 2522 more items
]

-- Task 4 ----------------------------------------------------------------------
chars in names array : 1.9122e+4

-- Bonus -----------------------------------------------------------------------
[
  'Aaran!',      'Aarez!',      'Aaron!',      'Aarron!',     'Aaryn!',
  'Aazaan!',     'Abbas!',      'Abdalroof!',  'Abdirahman!', 'ABDUL!',
  'Abdulbasir!', 'Abdulkarem!', 'Abdullah!',   'Abdulmalik!', 'Abdur!',
  'Abel!',       'Abhisumant!', 'Abir!',       'Abu!',        'ACE!',
  'Adam!',       'Addison!',    'Adegbola!',   'Aden!',       'Adie!',
  'Aditya!',     'Adrian!',     'Aedan!',      'Aedyn!',      'AFONSO!',
  'Ahmed!',      'Ahoua!',      'Aiadan!',     'Aiden!',      'Aidy!',
  'Aiman!',      'Ainslie!',    'Airidas!',    'AJ!',         'AKAN!',
  'Al!',         'Alan!',       'Alasdair!',   'Alber!',      'Albie!',
  'Alec!',       'Aleem!',      'Aleksander!', 'Aleksandrs!', 'ALESSANDRO!',
  'Alex!',       'Alexei!',     'Alexzander!', 'Alfee!',      'Alfred!',
  'Alhaji!',     'Ali!',        'Alieu!',      'Alisdair!',   'ALISTAIR!',
  'Alister!',    'Allan!',      'Allen!',      'Allister!',   'Alphonse!',
  'Alum!',       'Alvin!',      'Amaan!',      'Amani!',      'AMEER!',
  'Ami!',        'Amir!',       'Ammar!',      'Amolpreet!',  'Amrinder!',
  'Amro!',       'Andrea!',     'Andrei!',     'Andrew!',     'ANEES!',
  'Angel!',      'Angus!',      'Anis!',       'Anmolpreet!', 'Anndra!',
  'Anthony!',    'Antoine!',    'Antoni!',     'Antony!',     'ANUBHAV!',
  'Aon!',        'Apisai!',     'Aran!',       'Arann!',      'Arayan!',
  'Archie!',     'Ardal!',      'Areeb!',      'Aref!',       'ARGYLE!',
  ... 1215 more items
]
longest name (15 chars) : Oluwafikunayomi
chars in array : 8.895e+3
*******************************************************************************/
