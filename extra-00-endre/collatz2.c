/*******************************************************************************
*  collatz2.c                                                                  *
*  calculate collatz numbers                                                   *
*******************************************************************************/

#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 1000

/*******************************************************************************
*  main                                                                        *
*******************************************************************************/

int
main ( int argc, char* argv[] )
{
  if ( argc != 2 )
  {
    printf( "usage: collatz [number]\n" );
    exit( EXIT_FAILURE );
  }

  unsigned long N;

  if ( !sscanf( argv[1], "%lu", &N ) )
  {
    printf( "error: not an integer\n" );
    exit( EXIT_FAILURE );
  }

  printf( "Running the Collatz procedure on all numbers from 1 to %lu:\n", N );

  unsigned long*  temp  = malloc( sizeof( unsigned long  ) * MAX_SIZE );
  unsigned short* result = malloc( sizeof( unsigned short ) * N );

  unsigned short steps;
  unsigned short maxSteps  = 0;
  unsigned long  maxStepsI = 0;

  unsigned long totalSteps   = 0;
  unsigned long skippedSteps = 0;

  unsigned long maxPeak  = 0;
  unsigned long maxPeakI = 0;

  unsigned long n = 1;
  unsigned long i;
  unsigned long t;

  for ( i = 0; i < N + 1; i++ )     result[i] = 0;
  for ( i = 0; i < MAX_SIZE;  i++ ) temp[i]   = 0;

  while ( n++ < N )
  {
    t = 0; i = n;

    while ( true ) {
      temp[ t++ ] = i;

      i = ( i % 2 ) ? ( i * 3 + 1 ) : ( i / 2 );

      if ( i > maxPeak )
      {
        maxPeakI = n;
        maxPeak  = i;
      }

      if ( ( i < N && result[i] ) || i == 1 ) break;
    }

    skippedSteps += steps = result[i];

    while ( t-- )
    {
      steps++;
      if ( temp[t] < N ) result[ temp[t] ] = steps;
    }

    if ( steps > maxSteps )
    {
      maxStepsI = n;
      maxSteps  = steps;
    }

    totalSteps += steps;
  }

  printf( "The integer with most steps was %lu, with %u total steps\n", maxStepsI, maxSteps );
  printf( "The integer with the hightest peak was %lu, with a peak of %lu\n", maxPeakI, maxPeak );
  printf( "The total number of calculations was %lu\n", totalSteps );
  printf( "The total number of calculations skipped was %lu\n", skippedSteps );

  exit( EXIT_SUCCESS );
}

/*******************************************************************************
*  output:                                                                     *
********************************************************************************
>> /usr/bin/time -v ./collatz2 100000000
Running the Collatz procedure on all numbers from 1 to 100000000:
The integer with most steps was 63728127, with 949 total steps
The integer with the hightest peak was 80049391, with a peak of 2185143829170100
The total number of calculations was 17923493583
The total number of calculations skipped was 17566544683

	User time (seconds): 2.65
	System time (seconds): 0.06
	Percent of CPU this job got: 99%
	Elapsed (wall clock) time (h:mm:ss or m:ss): 0:02.72

	Maximum resident set size (kbytes): 196156

	Major (requiring I/O) page faults: 0
	Minor (reclaiming a frame) page faults: 48871

	Voluntary context switches: 1
	Involuntary context switches: 39
*******************************************************************************/
