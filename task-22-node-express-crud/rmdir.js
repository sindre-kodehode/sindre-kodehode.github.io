#! /usr/bin/node
/*******************************************************************************
*  imports                                                                     *
*******************************************************************************/
import { argv  } from "node:process";
import { exit  } from "node:process";
import { rmdir } from "node:fs/promises";


/*******************************************************************************
*  constants                                                                   *
*******************************************************************************/
const missingText =
`rmdir.js: missing operand
Try 'rmdir.js --help' for more information.
`;

const helpText =
`Usage: rmdir.js [OPTION]... DIRECTORY...
Remove the DIRECTORY(ies), if they are empty.

Options:
  -v, --verbose     output a diagnostic for every directory processed
      --help        display this help and exit
`
const removedText = name =>
  `rmdir.js: removing directory '${ name }'`

const notEmptyText = name =>
  `rmdir.js: failed to remove '${ name }': Directory not empty`

const noDirectoryText = name =>
  `rmdir.js: failed to remove '${ name }': No such file or directory`


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

// --verbose or -v: print message when creating a file
if ( argv[2].match( /-v|--verbose/ ) ) verbose = options = true;


/*******************************************************************************
*  remove directory(ies)                                                       *
*******************************************************************************/

// run for each argument, skip first if an option is given
for ( let path of argv.slice( options ? 3 : 2 ) ) {
  try {
    // create a new URL with the current directory and the name given
    await rmdir( new URL( path, import.meta.url ) );
    // show message if verbose
    verbose && console.log( removedText( path ) ); 

  } catch ( err ) {
    // error if the directory already exists
    err.code === "ENOTEMPTY" && console.error( notEmptyText( path ) );

    // error if the path does not exist
    err.code === "ENOENT" && console.error( noDirectoryText( path ) );

    // exit with error
    exit( 1 );
  }
}

// exit with no error after successfully creating directories
exit( 0 );
