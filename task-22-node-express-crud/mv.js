#! /usr/bin/node
/*******************************************************************************
*  imports                                                                     *
*******************************************************************************/
import * as fs              from "node:fs/promises";
import * as proc            from "node:process";
import * as rl              from "node:readline/promises";
import { existsSync       } from "node:fs"
import { stdin  as input  } from "node:process";
import { stdout as output } from "node:process";


/*******************************************************************************
*  constants                                                                   *
*******************************************************************************/
const missingText =
`mkdir.js: missing operand
Try 'mkdir.js --help' for more information.
`;

const helpText =
`Usage: mv [OPTION]... SOURCE... DIRECTORY
Rename SOURCE to DEST, or move SOURCE(s) to DIRECTORY.

Options:
  -i, --interactive   prompt before overwrite
  -v, --verbose       explain what is being done
      --help          display this help and exit
`

const invalidText = opt =>
  `mv.js: invalid option -- '${ opt.replace( /^-*/, "" ) }'`

const renamedText = ( oldName, newName ) =>
  `mv.js: renamed '${ oldName }' -> '${ newName }'`


/*******************************************************************************
*  variables                                                                   *
*******************************************************************************/
let interactive = false;
let verbose     = false;


/*******************************************************************************
*  check arguments                                                             *
*******************************************************************************/

// exit and display message if no arguments are given
if ( proc.argv.length < 3 ) {
  console.error( missingText );
  proc.exit( 0 );
}

// filter out options and return an array of only paths given
const sources = proc.argv.slice( 2 ).filter( arg => {
  // --help: exit displaying a helpful message
  if ( arg.match( /^(--help)$/ ) ) {
    console.log( helpText );
    proc.exit( 1 );
  }

  // --interactive or -i: set interactive to true and skip argument
  else if ( arg.match( /^(-i|--interactive)$/ ) ) {
    interactive = true;
    return false;
  }

  // --verbose or -v: set verbose to true and skip argument
  else if ( arg.match( /^(-v|--verbose)$/ ) ) {
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
const dest    = sources.pop();
const destUrl = new URL( dest, import.meta.url );

// rename file and show message if verbose
const rename = async ( source, dest, sourceUrl, destUrl ) => {
  await fs.rename( sourceUrl, destUrl );
  if ( verbose ) console.log( renamedText( source, dest ) );
}

// if the destination exists, get the stats
let destStat = existsSync( destUrl ) ? await fs.stat( destUrl ) : undefined;

// loop through all the sources given
for ( const source of sources ) {
  try {
    const sourceUrl = new URL( source, import.meta.url );

    // the destination does not exist, safe to just rename
    if ( !destStat ) await rename( source, dest, sourceUrl, destUrl );

    // the destination is a directory, move the source into the directory
    else if ( destStat.isDirectory() ) {
      const dirDestUrl = new URL(  `${dest}/${source}`, import.meta.url );
      await rename( source, `${dest}${source}`, sourceUrl, dirDestUrl );
    }

    // the destination is an existing file
    else if ( destStat.isFile() ) {
      // confirm overwrite if interactive
      if ( interactive ) {
        const cli    = rl.createInterface({ input, output });
        const answer = await cli.question( `mv.js: overwrite ${ dest }? ` );
        cli.close();    

        // rename if user confirms with y or yes
        if ( answer.match( /y|yes/ ) )
          await rename( source, dest, sourceUrl, destUrl );
      }

      // no confirmation needed, just overwrite
      else await rename( source, dest, sourceUrl, destUrl );
    }
  }

  // catch and display error messages
  catch ( err ) {
    console.error( err.message );
    proc.exit( 1 );
  }
}

// exit with no error after successfully creating directories
proc.exit( 0 );
