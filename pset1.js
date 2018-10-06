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


/******************
SOLUTION TO PROBLEM 1:

17 (a number evaluates to itself)
11 (follows order of operations, 2 * 3 = 6, 1 + 6 = 7, 7 + 4 = 11)
1.25 (800 / 80 evaluates to 10; 10 / 8 evaluates to 1.25)
true (400 is greater than 200)
false (1 is equal to 1)
true (if one value in an OR statement is true, expression evaluates to true)
false (if one value in an AND statement is false, expression evaluates to false)
2 (20 mod 6 evaluates to 2)
'ab' (string 'a' and string 'b' are concatenated)

******************/


/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4
-> typeof 'hello'
-> typeof true
-> 2 === 1 || 3 === 4

******************/


/******************
SOLUTION TO PROBLEM 2:

number
string
boolean
false (if one value in an AND statement is false, the expression evaluates to false; both expressions evaluate to false)


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


******************/


/******************
SOLUTION TO PROBLEM 3:

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

******************/


/******************
SOLUTION TO PROBLEM 4:

|   A   |   B   |   !A   |   !B   |!A &&!B|
| true  | true  | false  | false  | false |
| false | true  | true   | false  | false |
| true  | false | false  | true   | false |
| false | false | true   | true   | true  | 

******************/


/******************
PROBLEM 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1. 

For reference, here is a exp of a step-by-step evaluation:
1 + 2 + 3 + 4
    3 + 3 + 4
        6 + 4
           10


******************/

it
/******************
SOLUTION TO PROBLEM 5:

2 + 3 * 2 + 1
2  +  6   + 1
8 + 1
9

******************/


/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.


******************/


/******************
SOLUTION TO PROBLEM 6:

4 / 2 + 8 / 4
2 + 8 / 4
2 + 2
4

******************/


/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.



******************/


/******************
SOLUTION TO PROBLEM 7:

'ca' + 'ter' + 'pi' + 'llar'
'cater' + 'pi' + 'llar'
'caterpi' + 'llar'
'caterpillar'

******************/


/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.


******************/


/******************
SOLUTION TO PROBLEM 8:

2 * 4 === 8 && 'car' + 'pool' === 'carpool'
8 === 8     && 'car' + 'pool' === 'carpool'
8 === 8     &&   'carpool'    === 'carpool'
true        &&   'carpool'    === 'carpool'
true        &&             true
true

******************/