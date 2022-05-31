/*******************************************************************************
*  collatz.c                                                                   *
*  calculate collatz numners                                                   *
*******************************************************************************/

#include <stdio.h>
#include <stdlib.h>

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

  unsigned long N = 0;

  if ( !sscanf( argv[1], "%lu", &N ) )
  {
    printf( "error: not an integer\n" );
    exit( EXIT_FAILURE );
  }

  printf( "Running the Collatz procedure on all numbers from 1 to %lu:\n", N );

  unsigned short steps;
  unsigned short maxSteps  = 0;
  unsigned long  maxStepsI = 0;

  unsigned long peak;
  unsigned long maxPeak  = 0;
  unsigned long maxPeakI = 0;

  unsigned long totalSteps = 0;

  unsigned long n;
  unsigned long i;

  for ( n = 2; n < N + 1; n++ )
  {
    i = n;
    steps = peak = 0;

    while ( i != 1 )
    {
      if ( i > peak ) peak = i;
      i = ( i % 2 ) ? ( i * 3 + 1 ) : ( i / 2 );
      steps++;
    }

    if ( steps > maxSteps )
    {
      maxStepsI = n;
      maxSteps  = steps;
    }

    if ( peak > maxPeak )
    {
      maxPeakI = n;
      maxPeak  = peak;
    }

    totalSteps += steps;
  }

  printf( "The integer with most steps was %lu, with %u total steps\n", maxStepsI, maxSteps );
  printf( "The integer with the hightest peak was %lu, with a peak of %lu\n", maxPeakI, maxPeak );
  printf( "The total number of calculations was %lu\n", totalSteps );
  printf( "The total number of calculations skipped was %d\n", 0 );

  exit( EXIT_SUCCESS );
}

/*******************************************************************************
*  output:                                                                     *
********************************************************************************
>> /usr/bin/time -v ./collatz 100000000
Running the Collatz procedure on all numbers from 1 to 100000000:
The integer with most steps was 63728127, with 949 total steps
The integer with the hightest peak was 80049391, with a peak of 2185143829170100
The total number of calculations was 17923493583
The total number of calculations skipped was 0

	User time (seconds): 32.48
	System time (seconds): 0.01
	Percent of CPU this job got: 99%
	Elapsed (wall clock) time (h:mm:ss or m:ss): 0:32.61

	Maximum resident set size (kbytes): 1532

	Major (requiring I/O) page faults: 0
	Minor (reclaiming a frame) page faults: 70

	Voluntary context switches: 1
	Involuntary context switches: 1562
*******************************************************************************/
