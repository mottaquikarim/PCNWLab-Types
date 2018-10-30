/******************
PROBLEM 1:

What are the types of the following expressions and what do they evaluate to, and why?*/

/*
-> 17
Solution: 17 is a type, and it's type/value is a number);
*/


/*
-> 1 + 2 * 3 + 4
Solution: This is telling the program/computer to solve this equation, 
it will solve it through the order of PEMDAS.
This will solve it as 
1. 2 * 3 = 6
2. 1 + 6 + 4 = 11
*/


/*
-> 800 / 80 / 8
Solution: This will solve it as 
1. 800/ 80 = 10, 
2. 10/8 = 1.25
*/


/*
-> 400 > 200
Solution: This will r8n true, bc it's testing the relationship between 400 and 200. 
The test returns one of the two boolean values, so 400 is greater than 200, so it's true.
*/


/*
-> 1 !== 1
Solution: !== tests is comparing if 1 is not the same as 1, since 1 is the same as 1,
it will brun false. If it was 2 !== 1, it will run true, since 2 is not the same as 1.
*/


/*
-> true || false
Solution: || operator means or, it's checking if one of the statements is true. So it will
run true, because one of the statements is true.
*/


/*
-> true && false
Solution: The && is checking if both statements are true. It will run false, because
one side of the statement is false.
*/


/*
-> 20 % 6
Solution: The % moduo operator is finding the modulo(remainder) of 20 and 6. It will run 2. 
*/


/*
-> 'a' + 'b'
Solution: This will run 'ab.'
*/


/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4
Solution : return number, bc it's data type is a number.

-> typeof 'hello'
Solution: returns string, bc it's data type is a string.

-> typeof true
Solution: returns boolean, bc it's data type is boolean.

-> 2 === 1 || 3 === 4
Solution: returns false, because 2 is not 1, and 3 is not 4.

******************/


/******************
PROBLEM 3:

Create a truth table for the expression A || B.
Solution: 

|   A   |   B   |   A || B      |
| false | true  |   true        |
| true  | false |   true        |
| true  | true  |   true        |
| false | false |   false       |

For reference, here is a truth table for the expression A && B:

|   A   |   B   | A && B| 
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false | 
******************/


/******************
PROBLEM 4:

Create a truth table for the expression !A && !B.

|   !A   |   !B    |  A     |   B   |   !A && !B
|!true   | !false  | false  | true  |  false
|!true   | !true   | false  | false |  false
|!false  | !false  |  true  | true  |  true 
|!false  | !true   |  true  | false |  false                

For reference, here is a truth table for the expression A && !B:

|   A   |   B   |   !B   | A &&!B| 
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false | 

******************/


/******************
PROBLEM 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1. 
Solution:
2 + 3 * 2 + 1
    2 + 6 + 1
        8 + 1 
            9

For reference, here is a exp of a step-by-step evaluation:
1 + 2 + 3 + 4
    3 + 3 + 4
        6 + 4
           10


******************/



/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.
Solution:
4 / 2 + 8 / 4
        2 + 2
            4


******************/



/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.
cat + ter + pi + llar
catter + pi + llar
catterpi + llar
catterpillar


******************/


/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.

2 * 4 === 8 && 'car' + 'pool' === 'carpool'
8 === 8 && 'carpool' === 'carpool'
true && true


******************/