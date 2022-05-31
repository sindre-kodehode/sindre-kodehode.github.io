#! /usr/bin/env node
"use strict"

/*******************************************************************************
*  COLLATZ CONJECTURE                                                          *
*  The Collatz conjecture in mathematics asks whether repeating two simple     *
*  arithmetic operations will eventually transform every positive integer      *
*  into 1.                                                                     *
*                                                                              *
*  It works like this:                                                         *
*  - Start with any positive number                                            *
*  - If the number is odd, multiply it by 3 and add 1                          *
*  - If the number is even, divide it by 2                                     *
*  - Repeat the above process on the resulting number                          *
*                                                                              *
*  The Collatz conjecture has shown that any positive number                   *
*  will eventually reach 1, which will result in a loop where                  *
*  no further progress can be made                                             *
*                                                                              *
*  Use Javascript to test the Collatz conjecture:                              *
*  Write a function that takes in a number, and run the collatz operation      *
*  on every number from 1 to the number received as a parameter.               *
*                                                                              *
*  Include code that finds which number took the most amount of steps to       *
*  reach 1, and how many steps it took.                                        *
*                                                                              *
*  Include code that finds which number that reached the highest number in     *
*  its sequence, and what that peak value was.                                 *
*                                                                              *
*  Output the following console.log from your function:                        *
*  “Running the Collatz procedure on all numbers from 1 to N:”                 *
*  “The integer with most steps was N, with N total steps”                     *
*  “The integer with the highest peak was N, with a peak of N”                 *
*  “The total number of calculations was N”                                    *
*******************************************************************************/

const N = parseInt( process.argv[2] );

if ( !N ) {
  console.log( "Not a number" );
  process.exit();
}


const collatz = i => ( i % 2 ) ? ( i * 3 + 1 ) : ( i / 2 );


/*******************************************************************************
*  as a recursive function                                                     *
*******************************************************************************/
// const collatz2 = i => {
//   if ( i === 1 ) return 0;
//   return 1 + collatz2( collatz(i) );
// };


/*******************************************************************************
*  with a while loop                                                           *
*******************************************************************************/
const collatz1 = i => {
  let steps = 0;
  let peak  = 0;

  while ( i !== 1 ) {
    peak = Math.max( peak, i )
    i = collatz(i);
    steps++;
  }

  return [ steps, peak, 0 ];
};


/*******************************************************************************
*  with a while loop, skipping already calculated steps                        *
*******************************************************************************/
const collatz2 = n => {
  let temp = [];

  while ( !result[n] ) {
    temp.push(n);
    n = collatz(n);
  }

  let steps = result[n];
  let skip  = result[n];
  let peak  = Math.max( ...temp )
  let t     = 0;

  while( t = temp.pop() ) {
    steps++;
    if ( t < N ) result[t] = steps;
  }

  steps--;

  return [ steps, peak, skip ];
};


/*******************************************************************************
*  print result                                                                *
*******************************************************************************/
console.log( `Running the Collatz procedure on all numbers from 1 to ${N}:` );

const result = Array(N);
result[1] = 1;

let maxSteps     = 0;
let maxStepsInt  = 0;
let maxPeak      = 0;
let maxPeakInt   = 0;
let totalSteps   = 0;
let skippedSteps = 0;

for ( let n = 2; n < N + 1; n++ ) {
  const [ steps, peak, skip ] = collatz2(n);

  if ( steps > maxSteps ) {
    maxStepsInt = n;
    maxSteps    = steps;
  }

  if ( peak > maxPeak ) {
    maxPeakInt = n;
    maxPeak    = peak;
  }

  totalSteps   += steps;
  skippedSteps += skip;
}

console.log( `The integer with most steps was ${maxStepsInt}, with ${maxSteps} total steps` );
console.log( `The integer with the hightest peak was ${maxPeakInt}, with a peak of ${maxPeak} ` );
console.log( `The total number of calculations was ${totalSteps}` );
console.log( `The total number of calculations skipped was ${skippedSteps}` );


/*******************************************************************************
* output:                                                                      * 
********************************************************************************
>> /usr/bin/time -v node collatz.js 100000000
Running the Collatz procedure on all numbers from 1 to 100000000:
The integer with most steps was 63728127, with 949 total steps
The integer with the hightest peak was 80049391, with a peak of 2185143829170100
The total number of calculations was 17923493583
The total number of calculations skipped was 17787204239

	User time (seconds): 48.00
	System time (seconds): 0.74
	Percent of CPU this job got: 100%
	Elapsed (wall clock) time (h:mm:ss or m:ss): 0:48.60

	Maximum resident set size (kbytes): 1512384

	Major (requiring I/O) page faults: 3
	Minor (reclaiming a frame) page faults: 476407

	Voluntary context switches: 3473
	Involuntary context switches: 206

>> /usr/bin/time -v node collatz.js 100000000
Running the Collatz procedure on all numbers from 1 to 100000000:
The integer with most steps was 63728127, with 949 total steps
The integer with the hightest peak was 80049391, with a peak of 2185143829170100
The total number of calculations was 17923493583
The total number of calculations skipped was 0

	User time (seconds): 184.55
	System time (seconds): 0.01
	Percent of CPU this job got: 99%
	Elapsed (wall clock) time (h:mm:ss or m:ss): 3:04.66

	Maximum resident set size (kbytes): 40828

	Major (requiring I/O) page faults: 0
	Minor (reclaiming a frame) page faults: 3949

	Voluntary context switches: 53
	Involuntary context switches: 629
*******************************************************************************/
