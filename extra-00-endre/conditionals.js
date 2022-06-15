#! /usr/bin/node

/*******************************************************************************
*  conditionals oppgave                                                        * 
*******************************************************************************/
 
const userName     = "Tom";
const userAge      = 18;
 
let userIsAdmin    = true;
let userIsLoggedIn = false;
let userIsBlocked  = false;
 
let goToPage       = "";
 
/*******************************************************************************
*  lag en conditional som sjekker om userName eksisterer, at brukeren er       * 
*  over 18, og at user ikke er blocked.                                        * 
*******************************************************************************/
let error = "";

if      ( ! ( userName      ) ) error = "User does not exist.";
else if ( ! ( userAge >= 18 ) ) error = "User is not over 18 years old.";
else if (   ( userIsBlocked ) ) error = "User is blocked.";


/*******************************************************************************
*  hvis en eller flere av disse ikke oppfylles, skal du console.log()          * 
*  en feilmelding.                                                             * 
*******************************************************************************/
if ( error ) return console.log( error );


/*******************************************************************************
*  hvis alle kriterier er oppfylt, sett variabelen goToPage til "/home", og    * 
*  endre userIsLoggedIn til true. hvis brukeren er admin, endre variabelen     * 
*  goToPage til "/admin" istedenfor "/home".                                   * 
*******************************************************************************/
userIsLoggedIn = true;
goToPage       = userIsAdmin ? "/admin" : "/home";


/*******************************************************************************
*  console.log(goToPage) til slutt for å se at bruker har blitt sendt til      * 
*  rett side.                                                                  * 
*******************************************************************************/

console.log( `${ userName } is logged in to ${ goToPage }` );
