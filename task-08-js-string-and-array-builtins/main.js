#! /usr/bin/env node
"use strict"

/*******************************************************************************
*  1. Finn en tekst på nettet (den kan enten være på norsk eller               *
*  engelsk). Velg en wordcount og se til at teksten er innfor den              *
*******************************************************************************/
console.log( "-- Part 1, Task 1: ".padEnd( 80, "-" ) );

import alice from "./text.js"

const words     = alice.match( /\b[a-zA-Z’]+\b/g );
const wordcount = words.length;

console.log( `wordcount : ${wordcount}` );
 

/*******************************************************************************
*  2. lag en loop som teller til 10                                            *
*******************************************************************************/
console.log( "\n-- Task 2: ".padEnd( 81, "-" ) );

let count = [];
Array( 10 ).fill().map( ( _, i ) => count.push( i + 1 ) );

console.log( `count to ten : ${count.join( " " )}` );


/*******************************************************************************
*  3.  finn ordene "if"/"hvis", "as"/"som", "and"/"og"  i teksten du           *
*  valgte. Kutt ut disse ordene pluss 5 tegn på hver side av ordene i          *
*  teksten. Husk at mellomrom er også et tegn. Det trengs bare første          *
*  instance av ordene. Husk å lagre det du kutter ut i en egen variabel.       *
*******************************************************************************/
console.log( "\n-- Task 3: ".padEnd( 81, "-" ) );

const ifMatch  = alice.match( /.{5}\bif\b.{5}/  );
const asMatch  = alice.match( /.{5}\bas\b.{5}/  );
const andMatch = alice.match( /.{5}\band\b.{5}/ );

console.log( ifMatch[0]  );
console.log( asMatch[0]  );
console.log( andMatch[0] );


/*******************************************************************************
*  4. sett sammen de nye settningene fra variablene dine                       *
*******************************************************************************/
console.log( "\n-- Task 4: ".padEnd( 81, "-" ) );

const catString = ifMatch + asMatch + andMatch;

console.log( `concat string  : ${catString}` );


/*******************************************************************************
*  5. bytt ut ordene ("if"/"hvis", "as"/"som", "and"/"og") med                 *
*  norkse/engelske ord i den nye teksten din.                                  *
*******************************************************************************/
console.log( "\n-- Task 5: ".padEnd( 81, "-" ) );

const replaceString = catString.replace( "if",  "hvis" )
                               .replace( "as",  "som"  )
                               .replace( "and", "og"   );

console.log( `replace string : ${replaceString}` );


/*******************************************************************************
*  Del 2:                                                                      *
*  6. lag et lite spill hvor spilleren har 3 liv. Hint: while loops            *
*******************************************************************************/
console.log( "\n-- Part 2, Task 6: ".padEnd( 81, "-" ) );

import {
  intro,
  descriptions,
  deathscenes,
  actions,
  gameover,
} from "./text.js"

let lives = 3;
let alive = true;

console.log( intro );

while ( alive ) {
  console.log( `lives: ${lives}`           );
  console.log( descriptions[ lives - 1 ]   );
  console.log( `> ${actions[ lives - 1 ]}` );
  console.log(  deathscenes[ lives - 1 ]   );

  lives--;

  if ( lives <= 0 ) {
    console.log( gameover );
    alive = false;
  }
}


/*******************************************************************************
*  Del 3:                                                                      *
*  7. lag en array med 10 ord og en med 10 tall.                               *
*******************************************************************************/
console.log( "\n-- Part 3, Task 7: ".padEnd( 81, "-" ) );

const randomInt = ( max ) => {
  return Math.floor( Math.random() * max );
};

const randomWords   = [];
const randomNumbers = [];

for ( let i = 0; i < 10; i++ ) {
  randomWords.push( words[ randomInt( wordcount ) ] );
  randomNumbers.push( randomInt( wordcount ) );
}

console.log( `ten words   : ${randomWords.join( " " )}` );
console.log( `ten numbers : ${randomNumbers.join( " " )}` );


/*******************************************************************************
*  Del 4:                                                                      *
*  8. Sett alle tallene i arrayet med 10 tall til å bli det samme. Dette       *
*  skal gjøres vha en built in method og en loop. Et tall skal endres fo       *
*  hver iteration av loopen. Det første og det siste tallet i arrayet skal     *
*  forbli uendret.                                                             *
*******************************************************************************/
console.log( "\n-- Part 4, Task 8: ".padEnd( 81, "-" ) );

randomNumbers.fill( randomInt( wordcount ), 1, -1 )

console.log( `ten numbers : ${randomNumbers.join( " " )}` );


/* example output:
-- Part 1, Task 1: -------------------------------------------------------------
wordcount : 2153

-- Task 2: ---------------------------------------------------------------------
count to ten : 1 2 3 4 5 6 7 8 9 10

-- Task 3: ---------------------------------------------------------------------
even if I fe
ind (as well
ank, and of h

-- Task 4: ---------------------------------------------------------------------
concat string  : even if I feind (as wellank, and of h

-- Task 5: ---------------------------------------------------------------------
replace string : even hvis I feind (som wellank, og of h

-- Part 2, Task 6: -------------------------------------------------------------
West of House
You are in an open field west of a big white house with a boarded
front door.
There is a small mailbox here.

lives: 3
The Troll Room
This is a small room with passages to the east and south and a forbidding
hole leading west. Bloodstains and deep scrathces (perhaps made by an
axe) mar the walls.  A nasty-looking troll, brandishing a bloody axe,
blocks all passages out of the room.  Your sword has begun to glow
very brightly.

> attack troll with sword
Your sword misses the troll by an inch.
The troll's swing knocks you over as you barely parry in time.

lives: 2
Damp Cave
Someone carrying a large bag is casually leaning against one of the walls
here. He does not speak, but it is clear from his acpect that the bag will be
taken only over his dead body.

> attack thief with sword
You charge, but the thief jumps nimbly aside.
The butt of his stiletto cracks you on the skull, and you stagger back.
The thief bows formally, raises his stiletto, and with a wry grin, ends the
battle and your life.

lives: 1
Darkness
It is pitch black. You are likely to be eaten by a grue.

> walk into darkness
Oh, no!  You walked into the slavering fangs of a lurking grue.
As you take your last breath, you feel relieved of your burdens. The
feeling passes as you find yourself before the gates of Hades, where the
spirits jeer at you and deny you entry.  Your senses are disturbed.
The objects in the dungeon appear indistinct, bleached of color,
even unreal.
The room looks strange and unearthly and objects appear indistinct.

You have no more lives, game over.

-- Part 3, Task 7: -------------------------------------------------------------
ten words   : found later little here she of telescope nothing eye thought
ten numbers : 301 2034 379 120 1282 1036 1981 259 989 1184

-- Part 4, Task 8: -------------------------------------------------------------
ten numbers : 301 680 680 680 680 680 680 680 680 1184 */
