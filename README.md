## The task

The task is to accept a set of commands and then simulate whether an object can move according to these commands without falling off the table it stands on.

The table can be seen as a matrix where the object will have an x and y position as drawn below.

![The box with the poistion __2, 2__ represents the starting position on a 4 x 4 table](/exercise-table.png)

The object always occupies exactly one cell and can be seen as a point without mass. **Origo is at top left.**

## Protocol

The solution reads the following inputs:

- the size of the table as two integers [width, height]
- the object starting position as two integers [x, y]

Output:

- If the simulation succeeded: The objects final position as two integers [x, y]
- If the simulation failed (the object falls off the table): [-1, -1] should be returned

## Commands to the simulation

The object always has a direction (north, east, south or west). A simulation always starts with direction north. North means if the object sits on [2,4] and moves forward one step, the object will now stand on [2,3].

The commands are:

0 = quit simulation and print result
1 = move forward one step
2 = move backwards one step
3 = rotate clockwise 90 degrees (eg north to east)
4 = rotate counterclockwise 90 degress (eg west to south)

## Example

If the program gets _4, 4, 2, 2_ as input, the table is initated to sixe 4 x 4 with the object in position [2, 2] with direction north. Then, commands _1, 4, 1, 3, 2, 3, 2, 4, 1, 0_ are read fron input and executed. The final output would then be the end position of the object, in this case _[0, 1]_.

## Runing the program

Inputs in script.js:

- **commands**: is an array for all the commands
- **boardWidth** and **boardHeight**: inputs for the table's dimensions
- **x** and **y**: coordinates for the starting position on the table

To run the program in the browser:

The function **runCommands** takes the array **commands** as an argument and executes the simulation.
