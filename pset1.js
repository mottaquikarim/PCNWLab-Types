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

/*  17 is a number and evalutates to 17.
    1 + 2 * 3 + 4 is a number and evaluates to 11 because of PEMDAS rules.
    800/ 80 / 8 is a number and evaluates to 1.25 because of PEMDAS rules.
    400 > 200 is a boolean and evaluates to true because the statement is true.
    1 !== 1 is a boolean and it evaluates to false because the statement is false.
    true || false is a boolean and it evaluates to true because a statement can be true or false.
    true && false is a boolean and it evaluates to false because a statement can not be true and false.
    20 % 6 is a number and it evaluates to 2 because that is the remainder of 20/6.
    'a' + 'b' is a string and it evaluates to ab because they are combined by the + operator. 
 */


/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4
-> typeof 'hello'
-> typeof true
-> 2 === 1 || 3 === 4

******************/

/*  typeof 4 will return number because 4 is a number.
    type of 'hello' will return string because anything in quotes is read as a string.
    typeof true will return boolean because anything with a true or false value is a boolean.
    2 === 1 || 3 === 4 will return false because this statement is a boolean because of the === and || operators and 
    when both values are evaluated and compared, both sides are false therefore the entire statement is false.
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

/*  |   A   |   B   | A || B| 
    | true  | true  | true  |
    | false | true  | true  |
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

/*  |   A   |   B   | !A    |  !B   | !A &&!B | 
    | true  | true  | false | false | true    |
    | false | true  | true  | false | false   |
    | true  | false | false | true  | false   |
    | false | false | true  | true  | true    | 



/******************
PROBLEM 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1. 

For reference, here is a exp of a step-by-step evaluation:
1 + 2 + 3 + 4
    3 + 3 + 4
        6 + 4
           10


******************/

/*  2 + 3 * 2 + 1
    2 +   6   + 1
       8 + 1
        9
*/       

/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.


******************/

/* 4 / 2 + 8 / 4
     2   + 8 / 4
     2   +   2 
         4
*/

/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.



******************/

/* 'ca' + 'ter' + 'pi' + 'llar'
    'cater' + 'pi' + 'llar'
         'caterpi' + 'llar'
              'caterpillar'
*/              

/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.

******************/

/*  2 * 4 === 8 && 'car' + 'pool' === 'carpool'
      8 === 8 && 'car' + 'pool' === 'carpool'
      8 === 8 && 'carpool' === 'carpool'
         true && 'carpool' === 'carpool'
         true && true
             true            
*/
