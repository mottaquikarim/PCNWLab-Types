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
console.log(typeof(17))
console.log(typeof(1 + 2 * 3 + 4),1 + 2 * 3 + 4)
console.log(typeof(400 > 200), 400 > 200)
console.log(typeof(1!=1), 1 !== 1)
console.log(typeof(true || false), true || false)
console.log(typeof(true && false), true && false)
console.log(typeof(20 % 6),20 % 6)
console.log(typeof('a' + 'b'),'a' + 'b')
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
console.log(typeof 4)
console.log(typeof 'hello')
console.log(typeof true)
console.log(2 === 1 || 3 === 4)
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
|   A   |   B   | A || B| 
| true  | true  | true  |
| false | true  | true |
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

/*
|   A   |   B   | !A && !B| 
| true  | true  | false  |
| false | true  | false |
| true  | false | false |
| false | false | true | 
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
2 + 3 * 2 + 1
    2 + 6 + 1
        8 + 1
            9    
 */           


/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.

4 / 2 + 8 / 4
    2 + 8 / 4
        2 + 2 
            4

******************/



/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.
'ca' + 'ter' + 'pi' + 'llar' = "caterpillar"


******************/


/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.
2 * 4 === 8 && 'car' + 'pool' === 'carpool'

true && 'car' + pool' === 'carpool'
true && true
true

******************/