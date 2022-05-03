#! /usr/bin/env node
"use strict"

import names from "./text.js"


/*******************************************************************************
* 1. Fjern alle navn fra arrayet som har index som er oddetall                 *
*******************************************************************************/
console.log( "-- Task 1 ".padEnd( 80, "-") )

const even = [];

for ( let i = 0; i < names.length; i++ ) {
  if ( i % 2 === 0) {
    even.push( names[i] );
  }
}

console.log( even );


/*******************************************************************************
* 2. Skriv kode som finner det lengste navnet i arrayet                        *
*******************************************************************************/
console.log( "\n-- Task 2 ".padEnd( 81, "-") )


/*******************************************************************************
* alternative that makes an array of arrays with the index of the second       *
* array indicating how many characters there are in the name.                  *
 
const result = [];

for ( let name of names ) {
  const length = name.length;

  if ( typeof result[length] === "undefined" ) {
    result[length] = [];
  }
  result[length].push( name );
}

*******************************************************************************/

const result = names.sort( ( a, b ) => {
  return b.length - a.length;
} );

console.log( `longest name (${result[0].length} chars) : ${result[0]}` );

/*******************************************************************************
* 3. Utfør disse oppgavene ved å bruke bare 1 loop                             *
*   1) Gjør hvert tiende navn om til store bokstaver                           *
*   2) Legg til et utropstegn etter hvert navn                                 *
*   3) Fjern alle navn som inneholder en bindestrek                            *
*******************************************************************************/
console.log( "\n-- Task 3 ".padEnd( 81, "-") )

const names2 = [];
let n = 0;

for ( let name of names ) {
  if ( name.includes( "-" ) ) {
    continue;
  }

  if ( n % 10 === 0 ) {
    name = name.toUpperCase();
  }

  n++;
  names2.push( name + "!" );
}

console.log( names2 );


/*******************************************************************************
*  4. Finn antall tegn i arrayet og vis dette tallet i vitenskapelig notasjon  *
*******************************************************************************/
console.log( "\n-- Task 4 ".padEnd( 81, "-") )

console.log( `chars in names array : ${names.join().length.toExponential()}` );

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
  'AARAN!',       'Aaren!',       'Aarez!',      'Aarman!',     'Aaron!',
  'Aarron!',      'Aaryan!',      'Aaryn!',      'Aayan!',      'Aazaan!',
  'ABAAN!',       'Abbas!',       'Abdallah!',   'Abdalroof!',  'Abdihakim!',
  'Abdirahman!',  'Abdisalam!',   'Abdul!',      'Abdulbasir!', 'Abdulkadir!',
  'ABDULKAREM!',  'Abdulkhader!', 'Abdullah!',   'Abdulmalik!', 'Abdur!',
  'Abdurraheem!', 'Abel!',        'Abhinav!',    'Abhisumant!', 'Abid!',
  'ABIR!',        'Abraham!',     'Abu!',        'Abubakar!',   'Ace!',
  'Adain!',       'Adam!',        'Addison!',    'Addisson!',   'Adegbola!',
  'ADEGBOLAHAN!', 'Aden!',        'Adenn!',      'Adie!',       'Adil!',
  'Aditya!',      'Adnan!',       'Adrian!',     'Adrien!',     'Aedan!',
  'AEDIN!',       'Aedyn!',       'Aeron!',      'Afonso!',     'Ahmad!',
  'Ahmed!',       'Ahoua!',       'Ahtasham!',   'Aiadan!',     'Aidan!',
  'AIDEN!',       'Aidian!',      'Aidy!',       'Ailin!',      'Aiman!',
  'Ainsley!',     'Ainslie!',     'Airen!',      'Airidas!',    'Airlie!',
  'AJ!',          'Ajay!',        'Ajayraj!',    'Akan!',       'Akram!',
  'Al!',          'Ala!',         'Alan!',       'Alanas!',     'Alasdair!',
  'ALASTAIR!',    'Alber!',       'Albert!',     'Albie!',      'Aldred!',
  'Alec!',        'Aled!',        'Aleem!',      'Aleksandar!', 'Aleksander!',
  'ALEKSANDR!',   'Aleksandrs!',  'Alekzander!', 'Alessandro!', 'Alessio!',
  'Alex!',        'Alexander!',   'Alexei!',     'Alexx!',      'Alexzander!',
  ... 2522 more items
]

-- Task 4 ----------------------------------------------------------------------
chars in names array : 1.9122e+4
*******************************************************************************/
