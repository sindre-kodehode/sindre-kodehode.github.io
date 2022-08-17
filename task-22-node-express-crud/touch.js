#! /usr/bin/node
/*******************************************************************************
*  imports                                                                     *
*******************************************************************************/
import * as fs   from "node:fs/promises";
import * as proc from "node:process";


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

const invalidText = opt =>
  `mv.js: invalid option -- '${ opt.replace( /^-*/, "" ) }'`


/*******************************************************************************
*  variables                                                                   *
*******************************************************************************/
let verbose = false;


/*******************************************************************************
*  check arguments                                                             *
*******************************************************************************/

// check if there are any arguments given, exit and display message if not
if ( proc.argv.length < 3 ) {
  console.error( missingText );
  proc.exit( 0 );
}

const sources = proc.argv.slice( 2 ).filter( arg => {
  // --help: exit displaying a helpful message
  if ( arg.match( /--help/ ) ) {
    console.log( helpText );
    proc.exit( 1 );
  }

  // --verbose or -v: print message when touching a file
  if ( arg.match( /-v|--verbose/ ) ) {
    verbose = true;
    return false;
  }

  // exit and display message if invalid option was given
  else if ( arg.match( /^-/ ) ) {
    console.error( invalidText( arg ) );
    proc.proc.exit( 0 );
  }

  return true;
});


/*******************************************************************************
*  create new directory(ies)                                                   *
*******************************************************************************/

// run for each argument, skip first if an option is given
for ( const source of sources ) {
  try {
    // get current time
    const time = new Date();

    // update the access and modify date on the given file
    await fs.utimes( new URL( source, import.meta.url ), time, time );

    // show message if verbose
    if ( verbose ) console.log( updatedText( source) ); 

  } catch ( err ) {
    if ( err.code === "ENOENT" ) {
      // create empty file if it does not exist
      await fs.writeFile( new URL( source, import.meta.url ), "", "utf8" );

      // show message if verbose
      if ( verbose ) console.log( createdText( source ) ); 

    } else {
      // print error message
      console.log( err.message );

      // exit with error
      proc.exit( 1 );
    }
  }
}

// exit with no error after successfully creating directories
proc.exit( 0 );
