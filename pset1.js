/******************
PROBLEM 1:

What are the types of the following expressions and what do they evaluate to, and why?

-> 17 -> number
-> 1 + 2 * 3 + 4 -> number / 11
-> 800 / 80 / 8
-> 400 > 200
-> 1 !== 1
-> true || false
-> true && false
-> 20 % 6
-> 'a' + 'b'

******************/

console.log();
/*
17 - number
(1 + 2 * 3 + 4) = 11 type of number
800 / 80 / 8 = 1.25
400 > 200 = true / boolean / 400 is more than
1 !==1 = false / boolean / !== - means not equal to 
true || false = true / boolean 
true && false = false / boolean /
20 % 6 = 2 / number
'a' + 'b' = ab / string
*/

/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4
-> typeof 'hello'
-> typeof true
-> 2 === 1 || 3 === 4

******************/
console.log();
/*
typeof 4 - number
typeof 'hello' - string
typeof true - boolean
2 === 1 || 3 === 4 - false
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
console.log();

/*
|   A   |   B   | A || B| 
| false | true  | true  |
| true  | true  | true  |
| true  | false | true  |
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
console.log();
/*
|   A   |   B   |  !A   |  !B   |!A &&!B| 
| true  | true  | false |false  | false |
| false | true  | true  |false  | true  |
| true  | false | false |true   | true  |
| false | false | true  |true   | false | 
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
console.log(2 + 3 * 2 + 1);
/*
2 + 3 * 2 + 1
2 + 6 + 1
8 + 1
9
*/

/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.


******************/
console.log(4 / 2 + 8 / 4);
/*
4 / 2 + 8 / 4
2 + 8 / 4
2 + 2
4
*/

/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.



******************/
console.log();
/*
'ca' + 'ter' + 'pi' + 'llar'
cater + 'pi' + 'llar'
caterpi + 'llar'
caterpillar
*/

/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.


******************/
console.log(8 === 8);
/*
2 * 4 === 8 && 'car' + 'pool' === 'carpool'
8 === 8 && 'car' + 'pool' === 'carpool'
true && 'car' + 'pool' === 'carpool'
true && 'carpool' === 'carpool'
true && true
true 

*/