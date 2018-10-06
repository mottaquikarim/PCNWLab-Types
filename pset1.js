/******************
PROBLEM 1:

What are the types of the following expressions and what do they evaluate to, and why?

-> 17
    -int value 17 because whole number, no other operations
-> 1 + 2 * 3 + 4
    -int value 11 because order of operation. PEMDAS
-> 800 / 80 / 8
    -int value 800 divided by 80 to 10. 10 divided by 8 to 10/8 double value 1.25
-> 400 > 200
    -true because 400 is greater than 200
-> 1 !== 1
    -false because 1 is === to 1 in value/type
-> true || false
    -true because true or false, since one parameter is true, returns true.
-> true && false
    -false because both parameters need to be true, returns false.
-> 20 % 6
    -2 because 20 mod 6 is remainder of 2
-> 'a' + 'b'
    -ab because char a and char b combined would be string "ab"

******************/


/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4
    -number because the return type is a number
-> typeof 'hello'
    -string because the return type is a string
-> typeof true
    -boolean because the return type is a boolean result/value
-> 2 === 1 || 3 === 4
    -false because 2 === 1 returns back false and 3 === 4 also returns back false

******************/


/******************
PROBLEM 3:
ANSWER
Create a truth table for the expression A || B.
|   A   |   B   | A && B| 
| true  | true  | true  |
| false | true  | true  |
| true  | false | true  |
| false | false | false | 


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
ANSWER
|   A   |   B   |   !A   |   !B   | !A && !B| 
| true  | true  | false  | false  |  false  |
| false | true  |  true  | false  |  false  |
| true  | false | false  |  true  |  false  |
| false | false |  true  |  true  |  true   | 

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
ANSWER
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
ANSWER
4 / 2 + 8 / 4
2 + 8 / 4
2 + 2
4
******************/



/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.
ANSWER
ca + ter + pi + llar
catar + pi + llar
catarpi + llar
catapillar
******************/


/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.
ANSWER
2 * 4 === 8 && 'car' + 'pool' === 'carpool'
8 === 8 && 'car' + 'pool' === 'carpool'
TRUE && 'car' + 'pool' === 'carpool'
TRUE && 'carpool' === 'carpool'
TRUE && TRUE
TRUE
******************/