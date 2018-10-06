/******************
PROBLEM 1:

What are the types of the following expressions and what do they evaluate to, and why?
                              Solutions:
-> 17                         number  truthy         Numbers are truthy values
-> 1 + 2 * 3 + 4              number  truthy 11      Numbers are truthy values Pemdas multiply then add from left to right
-> 800 / 80 / 8               number  truthy 5/4     Numbers are truthy values Pemdas divide from left to right
-> 400 > 200                  number  true           400 is greater than 200
-> 1 !== 1                    number  false          !== means does not equal false one does equal one
-> true || false              boolean true           Evaluates for truthiness true is true and false is false so true or false is truthy
-> true && false              number  false          Evaluates for truthiness true and false is false
-> 20 % 6                     number  2              The remainder of 20 / 6 is 2
-> 'a' + 'b'                  string  ab             String operation operates to ab

******************/



/******************
PROBLEM 2:

What will the following return? Why?
                            Solutions:
-> typeof 4                 number
-> typeof 'hello'           string
-> typeof true              boolean
-> 2 === 1 || 3 === 4       false

******************/


/******************
PROBLEM 3:

Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:
                                Solution:
|   A   |   B   | A && B|       | A    | B    | A || B  |
| true  | true  | true  |       |true  | true |   true  |
| false | true  | false |       |false | true |   true  |
| true  | false | false |       |true  | false|   true  |
| false | false | false |       |false | false|   false |


******************/



/******************
PROBLEM 4:

Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:
                                      Solution:
|   A   |   B   |   !B   | A &&!B|    | A    |  !A    |  B    | !B    |  !A && !B |
| true  | true  | false  | false |    | true |  false |  true |  false|      false          
| false | true  | false  | false |    | false|  true  |  false|  true |      true
| true  | false | true   | true  |    | true |  false |  false|  true |      false  
| false | false |  true  | false |    | false|  true  |  true |  false|      false 

******************/



/******************
PROBLEM 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1. 

For reference, here is a exp of a step-by-step evaluation:
1 + 2 + 3 + 4         Solution:          2 + 3 * 2 + 1
    3 + 3 + 4                            2 + 6 + 1
        6 + 4                            8 + 1
           10                            9


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
cater + pi + llar
caterpi + llar
caterpillar


******************/


/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.

Solution:
8 === 8 && 'car' + 'pool' === 'carpool'
8 === 8 && 'carpool' === 'carpool'
false        
******************/
