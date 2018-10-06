/******************
PROBLEM 1:

What are the types of the following expressions and what do they evaluate to, and why?

-> 17 
    number (17).
    No calculation being made.

-> 1 + 2 * 3 + 4 number
    number (11).
    Multiplies 2 * 3 (6): 1 + 6 + 4
    Adds remaining values: 7 + 4 = 11
    
-> 800 / 80 / 8 
    number (1.25)
    Divides left to right 800 / 80 = 10
    10 / 8 = 1.25
-> 400 > 200
    Boolean.
    compares to see if 400 is greater than 200

-> 1 !== 1
    Boolean.
    compares to see if 1 is not equal to 1.
    Because they are equal, it evaluates to false.

-> true || false
    Boolean.
    checks to see if either value is true. Because one is, the whole expression is true.

-> true && false
    Boolean.
    checks of both values are true. Because one is not, the whole expression is false.

-> 20 % 6
    number (2)
    Divides 20 by 6 (3).
    Returns the remainder (2).

-> 'a' + 'b'
    string ("ab")
    Because they are not numbers, js will concatenate the two strings.


******************/


/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4
    number. Because 4 is a number.

-> typeof 'hello'
    string. being in quotes makes it a string.

-> typeof true
    Boolean. because it is a boolean

-> 2 === 1 || 3 === 4
    false. because the comparisone of each set of numbers are not equal value and type.

******************/


/******************
PROBLEM 3:

Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

|   A   |   B   | A && B| 
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false | 

|   A   |   B   | A || B| 
| true  | true  | true  |
| false | true  | true  |
| true  | false | true  |
| false | false | false | 

******************/



/******************
PROBLEM 4:

Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

|   A   |   B   |   !B   | A &&!B| 
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false | 

|   !A  |   !B  |!A &&!B| 
| true  | true  | false |
| false | true  | false |
| true  | false | false |
| false | false | true  | 

******************/



/******************
PROBLEM 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1. 

For reference, here is a exp of a step-by-step evaluation:
1 + 2 + 3 + 4
    3 + 3 + 4
        6 + 4
           10

2 + 3 * 2 + 1
    2 + 6 + 1
        8 + 1
            9

******************/



/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.
4 / 2 + 8 / 4
    2 + 8 / 4
        2 + 2
            4

******************/



/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.
'ca' + 'ter' + 'pi' + 'llar'
     'cater' + 'pi' + 'llar'
          'caterpi' + 'llar'
               'caterpillar'


******************/


/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.
2 * 4 === 8 && 'car' + 'pool' === 'carpool'
    8 === 8 && 'car' + 'pool' === 'carpool'
       true && 'car' + 'pool' === 'carpool'
            true && 'carpool' === 'carpool'
                               true && true
                                       true
******************/