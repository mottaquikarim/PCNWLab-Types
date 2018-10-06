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

Soution to Problem 1:

-> is a number and equates to 17 because that's its value. 17 is just 17
-> is a number and eqautes to 10 because the operand "+" adds the values together. 1 plus 2 plus 3 plus 4 is 10
-> is a number and equates to 1.25 because the operand "/" divides the values. 800 divided by 80 divided by 8 is 1.25
-> is a boolean and equates to true because the operand ">" compares left hand value greater than to the right hand value. 400 is greater than 200
-> is a boolean and equates to false because the operand "!==" compares left hand value not equal to the right hand value. 1 does equal 1
-> is a boolean and equates to true because the operand "||" compares left hand value to be true or the right hand value to be true. One of the values is true so the answer is true
-> is a boolean and equates to false because the operand "&&" compares left hand value to be true and the right hand value to be true. One of the values is false so the answer is false
-> is a number and equates to 2 because the operand "%" divides the left hand value by the right hand value and returns a remainder. 20 module 6 is 2
-> is a string and equates to ab becuase the operand "+" adds the values together. a plus b is ab

******************/



/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4
-> typeof 'hello'
-> typeof true
-> 2 === 1 || 3 === 4

Soution to Problem 2:

-> number because 4 is a number
-> string because anything in qoutes are strings
-> boolean because true is a boolean
-> false because 2 === 1 is false or 3 === 4 is false

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

Soution to Problem 3:

|   A   |   B   | A || B| 
| true  | true  | true  |
| false | true  | true  |
| true  | false | true  |
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

Soution to Problem 4:

|   A   |   B   |   !A   |  !B   |!A &&!B|
| true  | true  | false  | false | false |
| false | true  | true   | false | false |
| true  | false | false  | true  | false |
| false | false | true   | true  | true  |
******************/



/******************
PROBLEM 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1. 

For reference, here is a exp of a step-by-step evaluation:
1 + 2 + 3 + 4
    3 + 3 + 4
        6 + 4
           10



Soution to Problem 5:

2 + 3 * 2 + 1
    2 + 6 + 1
        8 + 1
            9
******************/



/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.

Soution to Problem 6:

4 / 2 + 8 / 4
    2 + 8 / 4
        2 + 2
            4
******************/



/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.

Soution to Problem 7:

'ca' + 'ter' + 'pi' + 'llar'
     'cater' + 'pi' + 'llar'
          'caterpi' + 'llar'
               'caterpillar'

******************/


/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.

Soution to Problem 8:

2 * 4 === 8 && 'car' + 'pool' === 'carpool'
    8 === 8 && 'car' + 'pool' === 'carpool'
       true && 'car' + 'pool' === 'carpool'
            true && 'carpool' === 'carpool'
                               true && true
                                       true

******************/