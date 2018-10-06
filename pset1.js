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


/* Solution problem 1
--> '17' is a number afterwards
--> An arithmetic expression which evaluates to 11, 2 * 3 is 6 + 1 + 4 = 11
--> Arithmetic expression which evaluates to 80, 80/8 is 10, 800/10 is 80
--> Boolean expression, 400 is greater than 200 therefore it is true
--> 1 !==1 is a boolean that is being compared. It is true
--> true || false is an OR operator, which evaluates to true because the left hand side is true
--> true && false is a AND operator, which evaluates to false
--> 20 % 6  is a modulo which evaluates to a remainder of 2
--> 'a' + 'b' is 

******************/



/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4
-> typeof 'hello'
-> typeof true
-> 2 === 1 || 3 === 4

/* Solution to problem #2
--> Typeof 4 is a number
--> typeof 'hello' is a string
--> typeof true is a boolean
--> 2 === 1 || 3 === 4 is false

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

/* Solution to Problem 3:

|   A   |   B   | A || B| 
| true  | true  | true  |
| false | true  | true |
| true  | false | true |
| false | false | false | 
--> 

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

/* Solution for problem 4

|   A   |   B   |   !B   | A &&!B| 
| true  | true  | false  | true |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | true | 

******************/



/******************
PROBLEM 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1. 

For reference, here is a exp of a step-by-step evaluation:
1 + 2 + 3 + 4
    3 + 3 + 4
        6 + 4
           10


 /* Solution to problem #5
2+ 3 * 2 +1
3 * 2
2 + 6 + 1
8 + 1
9          
******************/




/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.

/* Solution to problem 6
4 / 2 + 8 / 4
2 + 8/4
2 + 2
4
******************/



/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.


/* Solution to problem 7
'ca' + 'ter' + 'pi' + 'llar'.
cater + 'pi' + 'llar'
caterpi +'llar'
caterpillar

******************/



/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.

/* Solution to problem 8
2 * 4 === 8 && 'car' + 'pool' === 'carpool'
8 === 8 && 'car' + 'pool' === 'carpool'
8 === 8 && 'carpool'  === 'carpool'
true  && 'carpool'  === 'carpool'
true && true
true

******************/


