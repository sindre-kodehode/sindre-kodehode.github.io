#! /usr/bin/node
/*******************************************************************************
*  imports                                                                     *
*******************************************************************************/
import { argv  } from "node:process";
import { exit  } from "node:process";
import { mkdir } from "node:fs/promises";


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


/*******************************************************************************
*  variables                                                                   *
*******************************************************************************/
let options = false;
let parents = false;
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

// --parents or -p: create parent directoy(ies) if the path does not exist
if ( argv[2].match( /-p|--parents/ ) ) parents = options = true;

// --verbose or -v: print message when creating a directoy
if ( argv[2].match( /-v|--verbose/ ) ) verbose = options = true;


/*******************************************************************************
*  create new directory(ies)                                                   *
*******************************************************************************/

// run for each argument, skip first if an option is given
for ( let path of argv.slice( options ? 3 : 2 ) ) {
  try {
    // create a new URL with the current directory and the name given
    await mkdir( new URL( path, import.meta.url ), { recursive : parents } );

    // show message if verbose
    verbose && console.log( createdText( path ) ); 

  } catch ( err ) {
    // error if the directory already exists
    err.code === "EEXIST" && console.error( fileExistText( path ) );

    // error if the path does not exist
    err.code === "ENOENT" && console.error( pathExistText( path ) );

    // exit with error
    exit( 1 );
  }
}

// exit with no error after successfully creating directories
exit( 0 );
