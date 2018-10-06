/******************
PROBLEM 1:

What are the types of the following expressions and what do they evaluate to, and why?

-> 17                       This evaluates to Number
-> 1 + 2 * 3 + 4            Also a number, PEMDAS evaluates this to 11
-> 800 / 80 / 8             Also a number, only divison so this reads left to right, evaluates to 1.25
-> 400 > 200                This is a boolean, evaluates to True  
-> 1 !== 1                  Also a boolean, evaluates to false because !== means 'Not Equal' and 1 is 1.
-> true || false            Evaluates to True. This is the 'or' operation and one of them is True
-> true && false            Evaluates to False. This is the 'and' operation and as long as one side is false, then the statement is false.
-> 20 % 6                   Modulo finds the remainder. Evaluates to 2
-> 'a' + 'b'                Adding strings together. Outputs 'ab'

******************/



/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4                 Number - its a number
-> typeof 'hello'           String - the quotes 
-> typeof true              boolean - true and false statements are booleans
-> 2 === 1 || 3 === 4       boolean - 'or' operator looks for a true or false statement 

******************/


/******************
PROBLEM 3:

Create a truth table for the expression A || B.

|   A   |   B   | A || B|
| true  | false | true  |
| true  | true  | true  |
| false | true  | true  |
| false | false | false |

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

For reference, here is a truth table for the expression A && !B:

|   A   |   B   |   !B   | A &&!B| 
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false | 

SOLUTION

|   !A   |   !B   | !A && !B|
| true   | true   | false  |
| true   | false  | false  |
| false  | true   | false  |
| false  | false  | true   |

******************/



/******************
PROBLEM 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1. 

SOLUTION
2 + 3 * 2 + 1
     (6)      PEMDAS Multiplication
2 + 6 + 1     PEMDAS Addition
  8   + 1     Finishing Addition
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

4 / 2 + 8 / 4  PEMDAS Division
(4/2) + (8/4)  Added parenthasis for a better visual
  2   +   2    PEMDAS Addition
      4
******************/



/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.

'ca' + 'ter' + 'pi' + 'llar'
    'cater' + 'pi'  + 'llar'
    'caterpi' + 'llar'
    'caterpillar'

******************/


/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.
2 * 4 === 8 && 'car' + 'pool' === 'carpool' 
 8    === 8 && 'car' + 'pool' === 'carpool' Multiplication first
 8    === 8 &&    'carpool'   === 'carpool' Adding strings
    TRUE    &&   TRUE                       8 is equal to 8 , AND 'carpool' is equal to 'carpool'
         TRUE                               both sides are true so the final part is TRUE

******************/

