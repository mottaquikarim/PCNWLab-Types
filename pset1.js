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
 SOLUTION to PROBLEM 1:
-> 17
Number, 17, the value is a number without quotes
-> 1 + 2 * 3 + 4
Multiplication and addition expression, evaluates to 11, follows orders of operations from left to right and completes multiplication first (2 * 3), then (1 + 6), and finally (7 + 4)
-> 800 / 80 / 8
Division expression, evaluates to 1.25, the line begins dividing 800 by 80, then the answer by 8
-> 400 > 200
Greater than expression, evaluates to boolean (true), 400 is a greater number than 200 so it evaluates to true in the console
->1 !== 1
Expression uses operator !== checking that one value is not the same as the opposite value, evalutes to false because the expression is saying 1 does not equal to 1, which is false since 1 is equal to 1
->true || false
Expression uses OR operator asking if one value on either side is true, evaluates to true because first value is already boolean (true)
-> true && false
Expression uses AND operator checking for both values on either side of expression to equal true, evaluates to false since second value is false
-> 20 % 6
Uses modulo operator and gives remainder, evaluates to 2
-> 'a' + 'b'
Addition of two strings, evaluates to 'ab' since expresssion is adding both strings 'a' and 'b'


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
SOLUTION to PROBLEM 2:
-> typeof 4
number (numerical value without quotes)
-> typeof 'hello'
string (the text is inside of quotes which is a string value)
-> typeof true
boolean ( true or false values are booleans and typeof command tells us the type of the value, value given is true which is a boolean value type)
-> 2 === 1 || 3 === 4
Comparison expression using equality operator, evaluates to false, because 2 does not equal to 1 and 3 does not equal to 4


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

SOLUTION to PROBLEM 3:

Truth table for expression A || B

|   A   |   B   | A || B| 
| true  | true  | true  |
| false | true  | true  |
| true  | false | true  |
| false | false | false | 


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
SOLUTION to PROBLEM 4:

|   A   |   B   |   !B   | !A && !B| 
| true  | true  | false  | false   |
| false | true  | false  | false   |
| true  | false | true   | false   |
| false | false | true   | true    | 



/******************
PROBLEM 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1. 

For reference, here is a exp of a step-by-step evaluation:
1 + 2 + 3 + 4
    3 + 3 + 4
        6 + 4
           10


******************/

/******************
SOLUTION to PROBLEM 5:
2 + 3 * 2 + 1
    2 + 6 + 1
        8 + 1 
            9

******************/


/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.


******************/


/******************
SOLUTION to PROBLEM 6:
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
SOLUTION to PROBLEM 7:

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
SOLUTION to PROBLEM 8:
2 * 4 === 8 && 'car' + 'pool' === 'carpool'
    8 === 8 && 'car' + 'pool' === 'carpool'
        true && 'car' + 'pool' === 'carpool'
            true && 'carpool' === 'carpool'
                true && true
                    true

******************/
