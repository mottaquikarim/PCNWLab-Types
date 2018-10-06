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
console.log(typeof 17); // number - solution: 17
console.log(typeof (1 + 2 * 3 + 4)); //number - solution: 11
console.log(typeof (400 > 200)); //boolean - solution: 400 is larger than 200 which is true
console.log(typeof (1 !== 1)); //boolean  - solution: integrer 1 equals interger 1, which makes the statement false - false is a boolean
console.log(typeof (true || false)); //boolean -  solution: returns true or true which simplies to true which is a boolean
console.log(typeof (true && false)); //boolean - solution: returns true and true, which simplies to true which is a boolean
console.log(typeof (20%6)); //number - solution: solution simplies to 2, 2 is a number
console.log(typeof ('a' + 'b')); //string -  solution: both a and b are strings


/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4 - number - solution: 4 is an interger
-> typeof 'hello' - string - solution: "hello" is a string
-> typeof true - boolean - solution: true is a boolean
-> 2 === 1 || 3 === 4 - boolean - solution: false both left and right sides are false

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
/* SOLUTIONS
|   A   |   B   | A || B| 
| true  | true  | true  |
| false | true  | true  |
| true  | false | true  |
| false | false | false | 


*/
/******************
PROBLEM 4:

Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

 A   |   B   |  !A   |  !B   |!A || !B|
----------------------------------------
true  | true  | false | false | false  |
false | true  | true  | false | false  |
true  | false | false | true  | false  |
false | false | true  | true  | true   |


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
/* SOLUTION
   2 + 3 * 2 + 1
   2 + (3*2) + 1
   2 + 6 + 1
   8 + 1
   9

*/
/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.


******************/
/* SOLUTION
    4 / 2 + 8 / 4
    (4 / 2) + (8 / 4)
    2 + 2
    4
*/
/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.



******************/
/* SOLUTION
    'ca' + 'ter' + 'pi' + 'llar'
    'cater' + 'pi' + 'llar'
    'caterpi' + 'llar'
    'caterpillar' 
*/
/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.


******************/
/* SOLUTION
    2 * 4 === 8 && 'car' + 'pool' === 'carpool'
    8 === 8 && 'car' + 'pool' === 'carpool'
    true  && 'car' + 'pool' === 'carpool'
    true && 'carpool' === 'carpool'
    true && true
    true
*/

