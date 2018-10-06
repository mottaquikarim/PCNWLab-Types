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
ANSWERS
-> number, its same value. 
-> number, total is 11. 
->number, total is 1.25.
->boolean, it evaluates to true.
->boolean, it evaluates to false.   
->boolean, it evaluates to true.
->boolean, it evaluates to false. 
->number, it evaluates to 2. 
->string, it evaluates to ab.
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
ANSWERS
->number
->string
->boolean
->boolean, it evaluates to false
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
ANSWERS:
|  A   |  B     | A || B|
| true  | false | true  |
| false | true  | true  | 
| true  | true  | true  |
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
ANSWERS:
A   -  B   - !B   -  A && !B
true  true false     false
false true false     false
false false true     false  
true  false true     true
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

/*
ANSWER:
2 + 3 * 2 + 1:
    2 + 6 + 1:
        8 + 1:
            9.
*/


/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.


******************/

/*
ANSWER:
4 / 2 + 8 / 4:
    2 + 8 /4:
        2 + 2:
            4.
*/

/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.



******************/

/*
ANSWER:
'ca' + 'ter' + 'pi' + 'llar':
    cater + 'pi' + 'llar':
        caterpi + 'llar':
            caterpillar.
*/


/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.


******************/

/*
ANSWERS:
2 * 4 === 8 && 'car' + 'pool' === 'carpool'
    8 === 8 && 'car' + 'pool' === 'carpool'
        8 === 8 && 'carpool' === 'carpool'
            true && true
                true.
*/