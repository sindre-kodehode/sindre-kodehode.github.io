#! /usr/bin/node
/*******************************************************************************
*  imports                                                                     *
*******************************************************************************/
import * as proc from "node:process";
import * as fs   from "node:fs/promises";


/*******************************************************************************
*  constants                                                                   *
*******************************************************************************/
const missingText =
`cat.js: missing operand
Try 'mkdir.js --help' for more information.
`;

const helpText =
`Usage: cat.js [OPTION]... [FILE]...
Concatenate FILE(s) to standard output.

Options:
      --help        display this help and exit
`
const invalidText = opt =>
  `cat.js: invalid option -- '${ opt.replace( /^-*/, "" ) }'`

const pathExistText = name =>
  `cat.js: cannot create directory '${ name }': No such file or directory`


/*******************************************************************************
*  variables                                                                   *
*******************************************************************************/


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

  // exit and display message if invalid option was given
  else if ( arg.match( /^-/ ) ) {
    console.error( invalidText( arg ) );
    proc.exit( 0 );
  }

  return true;
});


/*******************************************************************************
*  create new directory(ies)                                                   *
*******************************************************************************/

// run for each argument
for ( const source of sources ) {
  try {
    // create a filehandle of the file given as an argument
    console.log( "opening file handle" );
    const fd = await fs.open( new URL( source, import.meta.url ) );

    console.log( "creating input stream" );
    const inputStream  = fd.createReadStream();

    

  } catch ( err ) {
    // error if the path does not exist
    if ( err.code === "ENOENT" ) console.error( pathExistText( source ) );

    // display if unknown error
    else console.log( err.message );

    // exit with error
    proc.exit( 1 );
  }
}

// exit with no error after successfully cating
proc.exit( 0 );
