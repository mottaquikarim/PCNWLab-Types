/******************
PROBLEM 1:

What are the types of the following expressions and what do they evaluate to, and why?

-> 17
number = 17

-> 1 + 2 * 3 + 4
number = 11

-> 800 / 80 / 8
number = 1.25

-> 400 > 200
bool true

-> 1 !== 1
bool false

-> true || false
bool true

-> true && false
bool false

-> 20 % 6
number 2

-> 'a' + 'b'
strin ab

******************/

/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4
number because 4 is an integer

-> typeof 'hello'
string because hello is evaluates as a string

-> typeof true
boolean because true evaluates as a boolean value

-> 2 === 1 || 3 === 4
false because both bool values evaluates to false, false or false evaluates to false

******************/


/******************
PROBLEM 3:

Create a truth table for the expression A || B.

|   A   |  B    |  A||B |
-------------------------    
| false | false | false | 
| true  | false | true  |
| false | true  | true  |
| true  | true  | true  |



For reference, here is a truth table for the expression A && B:

|   A   |   B   | A && B| 
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false | 


******************/



/******************
PROBLEM 4:

Create a truth table for the expression !A && !B.
 
  A   |   B   |  !A   |  !B   |!A || !B|
----------------------------------------
true  | true  | false | false | false  |
false | true  | true  | false | false  |
true  | false | false | true  | false  |
false | false | true  | true  | true   |


For reference, here is a truth table for the expression A && !B:

|   A   |   B   |   !B   | A &&!B| 
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false | 

******************/



/******************
PROBLEM 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1.

2 + 3 * 2 + 1
    2 + 6 + 1
        8 + 1
            9


For reference, here is a exp of a step-by-step evaluation:
1 + 2 + 3 + 4
    3 + 3 + 4
        6 + 4
           10


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
'cater' + 'pi' + 'llar'
'caterpi' + 'llar'
'caterpillar'

******************/


/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'

2 * 4 === 8 && 'car' + 'pool' === 'carpool'
8 === 8 && 'car' + 'pool' === 'carpool'
true && 'carpool' === 'carpool'
true && true
true


******************/