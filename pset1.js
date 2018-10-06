/******************
PROBLEM 1:

What are the types of the following expressions and what do they evaluate to, and why?

-> 17 
-> 1 + 2 * 3 + 4
-> 800 / 80 / 8
-> 400 > 200
-> 1 !== 1
-> true || false
-> true && false
-> 20 % 6
-> 'a' + 'b'

******************/

/* 
ANSWERS FOR PROBLEM #1
17 ->  number data type, returns 17
1 + 2 * 3 + 4 -> number with arithmetic operators, returns 13 
800 / 80 / 8 -> number with arithmetic operators, returns, 1.25
400 > 200 -> number with arithmetic operator, returns true 
1 !== 1 -> number with comparison operator, returns false
true || false -> boolean data type, returns false
true && false -> boolean data type, returns false
20 % 6 -> numbers with modulo, the remainder operator, returns 2
'a' + 'b'-> string data type, returns ab
*/

/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4
-> typeof 'hello'
-> typeof true
-> 2 === 1 || 3 === 4

******************/

/* 
ANSWERS FOR PROBLEM #2
typeof 4 -> number
typeof 'hello'-> string
typeof true -> boolean
2 === 1 || 3 === 4 -> false
*/

/******************
PROBLEM 3:

Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

|   A   |   B   | A && B| 
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false | 


******************/

/* 
ANSWERS FOR PROBLEM #3
|   A   |   B   | A || B| 
| true  | true  |  true |
| false | true  |  true |
| true  | false |  true |
| false | false | false | 

*/

/******************
PROBLEM 4:

Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

|   A   |   B   |   !B   | A &&!B| 
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false | 

******************/

/* 
ANSWERS FOR PROBLEM #4
|   A   |   !A  |   B    |   !B   |!A &&!B| 
| true  | false |  true  | false  | false |
| false | true  |  false | true   | true  |
| true  | false |  true  | false  | false |
| false | true  |  true  | false  | false |



/******************
PROBLEM 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1. 

For reference, here is a exp of a step-by-step evaluation:
1 + 2 + 3 + 4
    3 + 3 + 4
        6 + 4
           10


******************/

/* 
ANSWERS FOR PROBLEM #5
2 + 3 * 2 + 1
    5 * 2 + 1
       10 + 1
           11
*/

/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.


******************/

/* 
ANSWERS FOR PROBLEM #6
4 / 2 + 8 / 4
    2 + 8 / 4
        2 + 2
            4
*/

/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.



******************/
/*
ANSWERS FOR PROBLEM #7
ca + ter + pi + llar
   cater + pi + llar
      caterpi + llar
         caterpillar
*/

/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.


******************/

/*
ANSWERS FOR PROBLEM #8
2 * 4 === 8 && 'car' + 'pool' === 'carpool'
    8 === 8 && 'car' + 'pool' === 'carpool'
       true && 'car' + 'pool' === 'carpool'
            true && 'carpool' === 'carpool'
                              true && true
                                      true 
 */