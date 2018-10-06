/******************
PROBLEM 1:

What are the types of the following expressions and what do they evaluate to, and why?

-> 17
Integer | 17 | 

-> 1 + 2 * 3 + 4
Arithmetic Operation | 11 | 

-> 800 / 80 / 8
Arithmetic Operation | 1. 25 | 

-> 400 > 200
Comparison Operation | true | 

-> 1 !== 1
Logical Operation | false

-> true || false
Logical Operation | true

-> true && false
Logical Operation | false

-> 20 % 6
Arithmetic Operation | 2
-> 'a' + 'b'
Concatenation | ab

******************/



/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4
Integer | is a number 

-> typeof 'hello'
String | is a word inside quotes

-> typeof true
Boolean | true is a boolean operator

-> 2 === 1 || 3 === 4
False | the result of the OR operation is false


******************/


/******************
PROBLEM 3:

Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

|   A   |   B   | A && B| A || B
| true  | true  | true  | true
| false | true  | false | false 
| true  | false | false | false
| false | false | false | false


******************/



/******************
PROBLEM 4:

Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

|   A   |   B   |   !B   | A &&!B|  !A   | !A && !B
| true  | true  | false  | false | false |  false
| false | true  | false  | false | true  |  false
| true  | false | true   | true  | false |  false   
| false | false |  true  | false | true  |  true

******************/



/******************
PROBLEM 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1. 

For reference, here is a exp of a step-by-step evaluation:
1 + 2 + 3 + 4
    3 + 3 + 4
        6 + 4
           10

2 + 3 * 2 + 1
2 + 6 + 1
8 + 1
9

******************/



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

'ca' + 'ter' + 'pi' + 'llar'
'cater' + pi' + 'llar'
'caterpi' + 'llar'
'caterpillar'

******************/


/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.

2 * 4 === 8 && 'car' + 'pool' === 'carpool'

******************/

console.log(2 * 4 === 8 && 'car' + 'pool' === 'carpool')