#! /usr/bin/env node
"use strict"


/*******************************************************************************
* imports                                                                      *
*******************************************************************************/
import names from "./text.js"


/*******************************************************************************
* global variables                                                             *
*******************************************************************************/
let chars;
let longest;
let result;


/*******************************************************************************
* 1. Fjern alle navn fra arrayet som har index som er oddetall                 *
*******************************************************************************/
console.log( "-- Task 1 ".padEnd( 80, "-") )

result = [];

for ( let i = 0; i < names.length; i++ ) {
  if ( i % 2 === 0 ) {
    result.push( names[i] );
  }
}

console.log( result );


/*******************************************************************************
* 2. Skriv kode som finner det lengste navnet i arrayet                        *
*******************************************************************************/
console.log( "\n-- Task 2 ".padEnd( 81, "-") )

result = [];

for ( let name of names ) {
  const length = name.length;

  if ( !result[length] ) {
    result[length] = [];
  }

  result[length].push( name );
}

longest = result.at(-1);

console.log( `longest name(s) (${longest[0].length} chars) : ${longest}` );


/*******************************************************************************
* 3. Utfør disse oppgavene ved å bruke bare 1 loop                             *
*   1) Gjør hvert tiende navn om til store bokstaver                           *
*   2) Legg til et utropstegn etter hvert navn                                 *
*   3) Fjern alle navn som inneholder en bindestrek                            *
*******************************************************************************/
console.log( "\n-- Task 3 ".padEnd( 81, "-") )

result = [];

for ( let name of names ) {
  if ( name.includes( "-" ) ) {
    continue;
  }

  if ( result.length % 10 === 0 ) {
    name = name.toUpperCase();
  }

  result.push( name + "!" );
};

console.log( result );


/*******************************************************************************
*  4. Finn antall tegn i arrayet og vis dette tallet i vitenskapelig notasjon  *
*******************************************************************************/
console.log( "\n-- Task 4 ".padEnd( 81, "-") )

chars = 0;

for ( let name of names ) {
  chars += name.length;
}

console.log( `chars in array : ${chars.toExponential()}` );


/*******************************************************************************
*  bonus: do everything in one loop!                                           *
*******************************************************************************/
console.log( "\n-- Bonus 1 ".padEnd( 81, "-") )

result = [];

chars   = 0;
longest = "";

names.forEach( ( name, index ) => {
  // remove odd numbered names
  if ( index % 2 !== 0 ) {
    return;
  }

  // remove hyphened names
  if ( name.includes( "-" ) ) {
    return;
  }

  // check if longest name
  if ( name.length > longest.length ) {
    longest = name;
  }

  // change to upper-case if divisible by 10
  if ( result.length % 10 === 0 ) {
    name = name.toUpperCase();
  }

  name  += "!";
  chars += name.length;

  result.push( name );
});

console.log( result );
console.log( `longest name (${longest.length} chars) : ${longest}` );
console.log( `chars in array : ${chars.toExponential()}` );


/*******************************************************************************
*  bonus: do everything with buildtin methods only                             *
*******************************************************************************/
console.log( "\n-- Bonus 2 ".padEnd( 81, "-") )

result  = names.filter( ( name, index ) => 
  index % 2 === 0 && !name.includes( "-" )
);

longest = Array.from( result ).sort(
  ( a, b ) => b.length - a.length
)[0];

result = result.map( ( name, index ) =>
  ( index % 10 === 0 ? name.toUpperCase() : name ) + "!"
);

chars  = result.join( "" ).length;

console.log( result );
console.log( `longest name (${longest.length} chars) : ${longest}` );
console.log( `chars in array : ${chars.toExponential()}` );


/*******************************************************************************
*  bonus: use reduce                                                           *
*******************************************************************************/
console.log( "\n-- Bonus 3 ".padEnd( 81, "-") )

longest = "";
chars   = 0;

result = names.reduce( ( previousValue, currentValue, currentIndex ) => {
  if ( currentIndex % 2 === 0 && !currentValue.includes( "-" ) ) {
    if ( currentValue.length > longest.length ) {
      longest = currentValue;
    }

    currentValue = (
      previousValue.length % 10 === 0
        ? currentValue.toUpperCase()
        : currentValue
    ) + "!";

    chars += currentValue.length;

    previousValue.push( currentValue );
  }

  return previousValue;
}, []);

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
chars in array : 1.6385e+4

-- Bonus 1 ---------------------------------------------------------------------
[
  'AARAN!',      'Aarez!',      'Aaron!',      'Aarron!',     'Aaryn!',
  'Aazaan!',     'Abbas!',      'Abdalroof!',  'Abdirahman!', 'Abdul!',
  'ABDULBASIR!', 'Abdulkarem!', 'Abdullah!',   'Abdulmalik!', 'Abdur!',
  'Abel!',       'Abhisumant!', 'Abir!',       'Abu!',        'Ace!',
  'ADAM!',       'Addison!',    'Adegbola!',   'Aden!',       'Adie!',
  'Aditya!',     'Adrian!',     'Aedan!',      'Aedyn!',      'Afonso!',
  'AHMED!',      'Ahoua!',      'Aiadan!',     'Aiden!',      'Aidy!',
  'Aiman!',      'Ainslie!',    'Airidas!',    'AJ!',         'Akan!',
  'AL!',         'Alan!',       'Alasdair!',   'Alber!',      'Albie!',
  'Alec!',       'Aleem!',      'Aleksander!', 'Aleksandrs!', 'Alessandro!',
  'ALEX!',       'Alexei!',     'Alexzander!', 'Alfee!',      'Alfred!',
  'Alhaji!',     'Ali!',        'Alieu!',      'Alisdair!',   'Alistair!',
  'ALISTER!',    'Allan!',      'Allen!',      'Allister!',   'Alphonse!',
  'Alum!',       'Alvin!',      'Amaan!',      'Amani!',      'Ameer!',
  'AMI!',        'Amir!',       'Ammar!',      'Amolpreet!',  'Amrinder!',
  'Amro!',       'Andrea!',     'Andrei!',     'Andrew!',     'Anees!',
  'ANGEL!',      'Angus!',      'Anis!',       'Anmolpreet!', 'Anndra!',
  'Anthony!',    'Antoine!',    'Antoni!',     'Antony!',     'Anubhav!',
  'AON!',        'Apisai!',     'Aran!',       'Arann!',      'Arayan!',
  'Archie!',     'Ardal!',      'Areeb!',      'Aref!',       'Argyle!',
  ... 1215 more items
]
longest name (15 chars) : Oluwafikunayomi
chars in array : 8.895e+3

-- Bonus 2 ---------------------------------------------------------------------
[
  'AARAN!',      'Aarez!',      'Aaron!',      'Aarron!',     'Aaryn!',
  'Aazaan!',     'Abbas!',      'Abdalroof!',  'Abdirahman!', 'Abdul!',
  'ABDULBASIR!', 'Abdulkarem!', 'Abdullah!',   'Abdulmalik!', 'Abdur!',
  'Abel!',       'Abhisumant!', 'Abir!',       'Abu!',        'Ace!',
  'ADAM!',       'Addison!',    'Adegbola!',   'Aden!',       'Adie!',
  'Aditya!',     'Adrian!',     'Aedan!',      'Aedyn!',      'Afonso!',
  'AHMED!',      'Ahoua!',      'Aiadan!',     'Aiden!',      'Aidy!',
  'Aiman!',      'Ainslie!',    'Airidas!',    'AJ!',         'Akan!',
  'AL!',         'Alan!',       'Alasdair!',   'Alber!',      'Albie!',
  'Alec!',       'Aleem!',      'Aleksander!', 'Aleksandrs!', 'Alessandro!',
  'ALEX!',       'Alexei!',     'Alexzander!', 'Alfee!',      'Alfred!',
  'Alhaji!',     'Ali!',        'Alieu!',      'Alisdair!',   'Alistair!',
  'ALISTER!',    'Allan!',      'Allen!',      'Allister!',   'Alphonse!',
  'Alum!',       'Alvin!',      'Amaan!',      'Amani!',      'Ameer!',
  'AMI!',        'Amir!',       'Ammar!',      'Amolpreet!',  'Amrinder!',
  'Amro!',       'Andrea!',     'Andrei!',     'Andrew!',     'Anees!',
  'ANGEL!',      'Angus!',      'Anis!',       'Anmolpreet!', 'Anndra!',
  'Anthony!',    'Antoine!',    'Antoni!',     'Antony!',     'Anubhav!',
  'AON!',        'Apisai!',     'Aran!',       'Arann!',      'Arayan!',
  'Archie!',     'Ardal!',      'Areeb!',      'Aref!',       'Argyle!',
  ... 1215 more items
]
longest name (15 chars) : Oluwafikunayomi
chars in array : 8.895e+3

-- Bonus 3 ---------------------------------------------------------------------
[
  'AARAN!',      'Aarez!',      'Aaron!',      'Aarron!',     'Aaryn!',
  'Aazaan!',     'Abbas!',      'Abdalroof!',  'Abdirahman!', 'Abdul!',
  'ABDULBASIR!', 'Abdulkarem!', 'Abdullah!',   'Abdulmalik!', 'Abdur!',
  'Abel!',       'Abhisumant!', 'Abir!',       'Abu!',        'Ace!',
  'ADAM!',       'Addison!',    'Adegbola!',   'Aden!',       'Adie!',
  'Aditya!',     'Adrian!',     'Aedan!',      'Aedyn!',      'Afonso!',
  'AHMED!',      'Ahoua!',      'Aiadan!',     'Aiden!',      'Aidy!',
  'Aiman!',      'Ainslie!',    'Airidas!',    'AJ!',         'Akan!',
  'AL!',         'Alan!',       'Alasdair!',   'Alber!',      'Albie!',
  'Alec!',       'Aleem!',      'Aleksander!', 'Aleksandrs!', 'Alessandro!',
  'ALEX!',       'Alexei!',     'Alexzander!', 'Alfee!',      'Alfred!',
  'Alhaji!',     'Ali!',        'Alieu!',      'Alisdair!',   'Alistair!',
  'ALISTER!',    'Allan!',      'Allen!',      'Allister!',   'Alphonse!',
  'Alum!',       'Alvin!',      'Amaan!',      'Amani!',      'Ameer!',
  'AMI!',        'Amir!',       'Ammar!',      'Amolpreet!',  'Amrinder!',
  'Amro!',       'Andrea!',     'Andrei!',     'Andrew!',     'Anees!',
  'ANGEL!',      'Angus!',      'Anis!',       'Anmolpreet!', 'Anndra!',
  'Anthony!',    'Antoine!',    'Antoni!',     'Antony!',     'Anubhav!',
  'AON!',        'Apisai!',     'Aran!',       'Arann!',      'Arayan!',
  'Archie!',     'Ardal!',      'Areeb!',      'Aref!',       'Argyle!',
  ... 1215 more items
]
longest name (15 chars) : Oluwafikunayomi
chars in array : 8.895e+3
*******************************************************************************/
