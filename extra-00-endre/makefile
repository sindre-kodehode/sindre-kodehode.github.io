CC      = gcc
CFLAGS  = -O2 -static -pedantic -ansi -std=c17 -pipe -W -Wall -Werror
targets = collatz collatz2

.PHONY: all
all: ${targets}

collatz  : collatz.c
collatz2 : collatz2.c

.PHONY: debug
debug: CFLAGS = -g -O0 -pedantic -ansi -std=c99 -pipe -W -Wall -Werror
debug: all

.PHONY: clean
clean:
	@ rm -f ${targets}
