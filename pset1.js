/******************
PROBLEM 1:

What are the types of the following expressions and what do they evaluate to, and why?

-> 17 - This is a Number
-> 1 + 2 * 3 + 4 - These are also numbers that result to 11 
-> 800 / 80 / 8 - This is also a number that = 1.25
-> 400 > 200 - This is a boolean that equivalent to true
-> 1 !== 1 - This is a boolean thats equivalent to true
-> true || false - Boolean equivalent to true
-> true && false - Boolean equivalent to false
-> 20 % 6 - NaN because the % is not a mathamatical command
-> 'a' + 'b' - A string bruh

******************/



/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4 - a number because 4 is a number
-> typeof 'hello' - it will display word hello which is a string 
-> typeof true - a boolean 
-> 2 === 1 || 3 === 4 - false 

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

Solution

|   A   |   B   | A || B| 
| true  | true  | true  |
| false | true  | true |
| true  | false | true |
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

Solution

|   !A   |   !B | !A &&!B| 
| true  | true  | false |
| false | true  | false |
| true  | false | false |
| false | false | true  | 
******************/



/******************
PROBLEM 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1. 

For reference, here is a exp of a step-by-step evaluation:
1 + 2 + 3 + 4
    3 + 3 + 4
        6 + 4
           10

Solution

2 + 3 * 2 + 1
    2 + 6 + 1
        8 + 1
            9



******************/



/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.

4 / 2 + 8 / 4
    2 + 8 + 2
       10 + 2
           12



******************/



/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.

'ca' + 'ter' + 'pi' + 'llar'.
cater + pi + llar
caterpi +llar
caterpillar

(issa butterfly)
******************/


/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.
2 * 4 === 8 && 'car' + 'pool' === 'carpool'.
2*4 = 8 === 8 && car+pool = carpool === carpool
true  && true 


******************/