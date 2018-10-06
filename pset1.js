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
//Answers to problem 1:
//1- Number
//2- Number, math operator, 1 + 2 * 3 + 4 = 3 + 6 + 4 = 9 + 4 = 13
//3- Number, math operator, 800 / 80 / 8 = 10 / 8 = 1.25
//4- Number, comparison operator, 400 > 200, 400 greater than 200, it returns boolean, 
//true = 400 is greaster than 200
//5- Boolean, comparison operator, !== means DO NOT EQUAL, 1 does not equal 1 is false,
//boolean result false
//6- Boolean, logical operator, || means eitehr can be true, true || false, 
//the result would be TRUE because one is true. 
//7- Boolean, logical operator, && means both must be true, true && false, 
//the result will be FALSE, not both are true.
//8- Number, math operator, % = modulus, modulos is the remainder after you devide a number,
//the result will be 2
//9- String, a and b are in single quotes, two strings are being put together because
//there is a + sign, 'a' add to 'b", result = ab.






/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4
-> typeof 'hello'
-> typeof true
-> 2 === 1 || 3 === 4

******************/
//Answer problem 2:
//'number'
//'string'
//'boolean'
//'true'


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
//Answer problem 3:
// |   A   |   B   | A || B| 
// | true  | true  | true  |
// | false | true  | true  |
// | true  | false | true  | 
// | false | false | false |    

// either can be true


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
//Answer problem 4:
// |   A   |   B   |   !B   |   !A   |!A && !B| 
// | true  | true  | false  | false  | true   |
// | false | true  | false  | false  | false  |
// | true  | false | true   | true   | false  |
// | false | false |  true  | true   | true   |

// A and B should equal their opposite at the same time.



/******************
PROBLEM 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1. 

For reference, here is a exp of a step-by-step evaluation:
1 + 2 + 3 + 4
    3 + 3 + 4
        6 + 4
           10


******************/
//Answe problem 5:
//2 + 3 * 2 + 1 
// -> 2 + 6 + 1
//  ->    8 + 1
//   ->       9


/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.


******************/
//Answer problem 6:
//   4 / 2 + 8 / 4
//   ->  2 + 8 / 4
//   ->      2 + 2
//   ->          4


/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.



******************/
/*Answer problem 7:
'ca' + 'ter' + 'pi' + 'llar'
-> 'cater' + 'pi' + 'llar'
-> 'carterpi' + llar
-> 'carterpillar' */

/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.


******************/
/* Answer to problem 8:
2 * 4 === 8 && 'car' + 'pool' === 'carpool'
8 === 8 && 'car' + 'pool' === 'carpool'
true && 'car' + 'pool' === 'carpool'
true && 'carpool' === 'carpool'
true && true
result = true */