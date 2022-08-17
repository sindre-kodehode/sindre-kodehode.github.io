#! /usr/bin/node
/*******************************************************************************
*  imports                                                                     *
*******************************************************************************/
import { utimes    } from "node:fs/promises";
import { writeFile } from "node:fs/promises";
import { argv      } from "node:process";
import { exit      } from "node:process";


/*******************************************************************************
*  constants                                                                   *
*******************************************************************************/
const missingText =
`touch.js: missing file operand
Try 'touch.js --help' for more information.
`;

const helpText =
`Usage: mkdir.js [OPTION]... DIRECTORY...
Usage: touch [OPTION]... FILE...
Update the access and modification times of each FILE to the current time.

A FILE argument that does not exist is created empty

Options:
  -v, --verbose     print a message for each touched file
      --help        display this help and exit
`
const createdText = name =>
  `touch.js: created file '${ name }'`

const updatedText = name =>
  `touch.js: updated file '${ name }'`


/*******************************************************************************
*  variables                                                                   *
*******************************************************************************/
let options = false;
let verbose = false;


/*******************************************************************************
*  check arguments                                                             *
*******************************************************************************/

// check if there are any arguments given, exit and display message if not
if ( argv.length < 3 ) {
  console.error( missingText );
  exit( 0 );
}

// --help: exit displaying a helpful message
if ( argv[2].match( /--help/ ) ) {
  console.log( helpText );
  exit( 1 );
}

// --verbose or -v: print message when touching a file
if ( argv[2].match( /-v|--verbose/ ) ) verbose = options = true;


/*******************************************************************************
*  create new directory(ies)                                                   *
*******************************************************************************/

// run for each argument, skip first if an option is given
for ( let path of argv.slice( options ? 3 : 2 ) ) {
  try {
    // get current time
    const time = new Date();

    // update the access and modify date on the given file
    await utimes( new URL( path, import.meta.url ), time, time );

    // show message if verbose
    verbose && console.log( updatedText( path ) ); 

  } catch ( err ) {
    if ( err.code === "ENOENT" ) {
      // create empty file if it does not exist
      await writeFile( new URL( path, import.meta.url ), "", "utf8" );

      // show message if verbose
      verbose && console.log( createdText( path ) ); 

    } else {
      // print error message
      console.log( err );

      // exit with error
      exit( 1 );
    }
  }
}

// exit with no error after successfully creating directories
exit( 0 );
