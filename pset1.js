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
/* Solution problem 1 
-> 17 is a number and evaluate 17. 
-> 1 + 2 * 3 + 4 is a number and evaluate 2 * 3 = 6, 1 + 6  + 4 then 1 + 6 = 7 + 4 = 11 
-> 800 / 80 /8 is type of a number and evaluate as 800 / 80 = 10 then 10 / 8 = 1.25
-> 400 > 200 is a type of a boolean where return true or false, returns ##false because return true if it can be converted to true otherwise return expre2 
-> 1 !==1 is type of boolean it returns ##false because of ! which is not true. 
-> true && false  type of boolean evaluate this as ##false due to expression 1 and 2 are not equal, or both are not equal 
-> 20 % 6 is a number, evaluates 3.33 but this is a modulo so the remaining of the number will be print which is .33 or .3 
-> 'a' + 'b' is a type of a string evaluate as ##ab

*/

/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4
-> typeof 'hello'
-> typeof true
-> 2 === 1 || 3 === 4

******************/
/* Solution problem 2 
-> typeof 4 return ##number 
-> typeof 'hello' return ##string of hello
-> typeof true return ##bolean of true
-> 2 ===1 || 3 ===4 return ##bolean of false 

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
/* Solution Problem 3 
|   A   |   B   | A || B| 
| true  | true  | true  | 
| false | true  | true|
| true  | false | true |
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
/* Solution Problem 4 
|   A   |   B   |   !B   | !A &&!B| 
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | false |
| false | false | false   | true | 

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
/* Solution Problem 5 
  2 + 3 * 2 + 1 
     2 + 6  + 1 
     8 + 1 


*/ 
/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.


******************/
/* Solution Problem 6 

4 / 2 + 8 / 4 
    2 + 8 / 4 
        2 + 2 
          4  
*/
/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.



******************/
/* Solution Problem 7 

-> 'ca' + 'ter' + 'pi' + 'llar'
        cater + 'pi' + 'llar'
            caterpi + 'llar'
            caterpillar 


*/

/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.


******************/

/*
2 * 4 === 8 && 'car' + 'pool' === 'carpool'.

 6 === 8 && 'car' + 'pool' === 'carpool' 
  
      6=== 8 && carpool === 'carpool'



*/ 