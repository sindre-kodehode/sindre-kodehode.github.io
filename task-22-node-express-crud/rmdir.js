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

const notADirectory = name =>
  `rmdir.js: failed to remove '${ name }': Not a directory`

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
  if ( proc.arg.match( /--help/ ) ) {
    console.log( helpText );
    proc.exit( 1 );
  }

  // --verbose or -v: print message when creating a file
  if ( proc.arg.match( /-v|--verbose/ ) ) {
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
*  remove directory(ies)                                                       *
*******************************************************************************/

// run for each argument, skip first if an option is given
for ( const source of sources ) {
  try {
    // create a new URL with the current directory and the name given
    await fs.rmdir( new URL( source, import.meta.url ) );

    // show message if verbose
    if ( verbose ) console.log( removedText( source) ); 

  } catch ( err ) {
    // error if the directory already exists
    if ( err.code === "ENOTEMPTY" ) console.error( notEmptyText( source) );

    // error if the path does not exist
    if ( err.code === "ENOENT" ) console.error( noDirectoryText( source ) );

    // error if the path is not a directory
    if ( err.code === "ENOTDIR" ) console.error( notADirectory( source ) );

    // exit with error
    proc.exit( 1 );
  }
}

// exit with no error after successfully creating directories
proc.exit( 0 );
