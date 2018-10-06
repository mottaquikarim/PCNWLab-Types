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
PROBLEM 1 SOLUTIONS: 

-> 17 would evaluate to 17 and is a number
-> 1 + 2 * 3 + 4 would evaluate to 11 due to order of operations and it is a number
-> 800 / 800 / 8 would evaluate to 1.25 and it is a number
-> 400 > 200 would evaluate to true because 400 is greater than 200 and true is a boolean value
-> 1 !== 1 would evaluate to false because 1 does equal 1 and false is a boolean value
-> true || false would evaluate to true because only one of the values has to be true for the expression to be true and true is a boolean value
-> true && false would evaluate to false because only one of the values has to be false for the expression to be false and false and is a boolean value
-> 20 % 6 would evaluate to 2 because 20/6 leave a remainder of 2 and 2 is a number
-> 'a' + 'b' would evaluate to ab because they are strings and when strings are added together, they're literally just attached to each other.


*/

/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4
-> typeof 'hello'
-> typeof true
-> 2 === 1 || 3 === 4

******************/

/* PROBLEM 2 SOLUTIONS:

-> typoeof 4 will return number because 4 is a number and not in quotations
-> typeof 'hello' will return string because it is in quotations
-> typeof true will return boolean because it is not in quotations, it is not a number and boolean values are true or false
-> 2 === 1 || 3 === 4 will return boolean because the evaluation would be false and false is a boolean value

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

PROBLEM 3 SOLUTION:

|   A   |   B   |  A || B  |
| true  |  true |   true   |
| true  | false |   true   | 
| true  | false |   true   | 
| false | false |   false  |

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
PROBLEM 4 Solution:

|  A    |  B    |  !A   |  !B   | !A && !B |
| false | false | true  | true  |   true   |
| true  | false | false | true  |  false   |
| false | true  | true  | false |  false   |
| true  | true  | false | false |  false   |

*/



/******************
PROBLEM 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1. 

For reference, here is a exp of a step-by-step evaluation:
1 + 2 + 3 + 4
    3 + 3 + 4
        6 + 4
           10


******************/

/* PROBLEM 5 SOLUTION:

2 + 3 * 2 + 1
2 + 6 + 1
8 + 1
9

/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.


******************/

/* 
PROBLEM 6 SOLUTION:

4 / 2 + 8 / 4
2 + 8 / 4
2 + 2
4

/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.


******************/
/*
PROBLEM 7 SOLUTION:

'ca' + 'ter' + 'pi' + 'llar'
'cater' + 'pi' + 'llar'
'caterpi' + 'llar'
'caterpillar'

*/
/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.

******************/

/* 
PROBLEM 8 SOLUTION:

2 * 4 === 8 && 'car' + 'pool' === 'carpool'
8 === 8 && 'car' + 'pool' === 'carpool'
true && 'car' + 'pool' === 'carpool'
true && 'carpool' === 'carpool'
true && true
true

*/