#! /usr/bin/node
/*******************************************************************************
*  imports                                                                     *
*******************************************************************************/
import { argv   } from "node:process";
import { exit   } from "node:process";
import * as fs from "node:fs/promises";
import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";


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
if ( argv.length < 3 ) {
  console.error( missingText );
  exit( 0 );
}

// filter out options and return an array of only paths given
const sources = argv.slice( 2 ).filter( arg => {
  // --help: exit displaying a helpful message
  if ( arg.match( /^(--help)$/ ) ) {
    console.log( helpText );
    exit( 1 );
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
    exit( 0 );
  }

  else return true;
});


/*******************************************************************************
*  create new directory(ies)                                                   *
*******************************************************************************/
const dest    = sources.pop();
const destUrl = new URL( dest, import.meta.url );

const rename = async ( source, dest, sourceUrl, destUrl ) => {
  await fs.rename( sourceUrl, destUrl );

  // show message if verbose
  verbose && console.log( renamedText( source, dest ) );
}

// check if the destination exists and if it is a directory or a file
let destStat;
try { destStat = await fs.stat( destUrl ); }
catch ( err ) { console.error( err.message ); }


for ( const source of sources ) {
  try {
    const sourceUrl = new URL( source, import.meta.url );

    // the destination does not exist, safe to just rename
    if ( !destStat ) {
      await rename( source, dest, sourceUrl, destUrl );
    }

    // the destination is a directory, move the source into the directory
    else if ( destStat.isDirectory() ) {
      const dirDestUrl = new URL(  `${dest}/${source}`, import.meta.url );
      await rename( source, dest, sourceUrl, dirDestUrl );
    }

    else if ( destStat.isFile() ) {
      // the destination is a file, confirm overwrite
      if ( interactive ) {
        const rl     = readline.createInterface({ input, output });
        const answer = await rl.question( `mv.js: overwrite ${ dest }? ` );
        rl.close();    

        // rename if user confirms with y or yes
        if ( answer.match( /y|yes/ ) ) {
          await rename( source, dest, sourceUrl, destUrl );
        }
      }

      // no confirmation needed, just overwrite
      else {
        await rename( source, dest, sourceUrl, destUrl );
      }
    }
  }

  catch ( err ) {
    console.error( err.message );
    exit( 1 );
  }
}

// exit with no error after successfully creating directories
exit( 0 );
