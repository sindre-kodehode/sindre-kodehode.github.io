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
`mkdir.js: missing operand
Try 'mkdir.js --help' for more information.
`;

const helpText =
`Usage: mkdir.js [OPTION]... DIRECTORY...
Create the DIRECTORY(ies), if they do not already exist.

Options:
  -p, --parents     no error if existing, make parent directories as needed
  -v, --verbose     print a message for each created directory
      --help        display this help and exit
`
const createdText = name =>
  `mkdir.js: created directory '${ name }'`

const fileExistText = name =>
  `mkdir.js: cannot create directory '${ name }': File exists`

const pathExistText = name =>
  `mkdir.js: cannot create directory '${ name }': No such file or directory`

const invalidText = opt =>
  `mv.js: invalid option -- '${ opt.replace( /^-*/, "" ) }'`


/*******************************************************************************
*  variables                                                                   *
*******************************************************************************/
let parents = false;
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

  // --parents or -p: create parent directoy(ies) if the path does not exist
  if ( arg.match( /-p|--parents/ ) ) {
    parents = true;
    return false;
  }

  // --verbose or -v: print message when creating a directoy
  if ( arg.match( /-v|--verbose/ ) ) {
    verbose = true;
    return false;
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

// run for each argument, skip first if an option is given
for ( const source of sources ) {
  try {
    // create a new URL with the current directory and the name given
    await fs.mkdir( new URL( source, import.meta.url ), { recursive : parents } );

    // show message if verbose
    if ( verbose ) console.log( createdText( source ) ); 

  } catch ( err ) {
    // error if the directory already exists
    if ( err.code === "EEXIST" ) console.error( fileExistText( source ) );

    // error if the path does not exist
    if ( err.code === "ENOENT" ) console.error( pathExistText( source ) );

    // exit with error
    proc.exit( 1 );
  }
}

// exit with no error after successfully creating directories
proc.exit( 0 );
