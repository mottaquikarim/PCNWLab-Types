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
 #####Solutions for PROBLEM ####
---17--- Number, expression will evaluate to 17 since there is no other operations
--- 1+2*3+ 4--- Number, expression will evaluate to 11 because it's an arithmetical operation 
---800 / 80 / 8--- Number, expression will evaluate to 1.25 because it's an arithmetical operation
---400 > 200--- Boolean, expression will evaluate to true because we are comparing 400 to 200. 400 is greater than 200.
---1 !== 1--- Boolean , expression will evaluate to false because we are asking if 1 does not equal to one, but 1 is equal to 1.
--- true || false--- Boolean , expression will evaluate to true because we are using the OR operator, in wich if any of the statements are true, then it must be true
--- true && false--- Boolean, expression will evaluate to false because we are using the AND operator, in wich if none of the statements is diffrent from the other, it must be false.
---20 % 6--- Number, expression will evaluate to 2 because 20 mod 6 is equal to two.
---'a' + 'b' --- String, expression will evaluate to 'ab' because in javascript we are able to add strings together.
 */


/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4
-> typeof 'hello'
-> typeof true
-> 2 === 1 || 3 === 4

******************/
/* ##### PROBLEM 2 SOLUTION ####
--- typeof 4-- Number because 4 is a type number expression
--- typeof 'hello' --- string because 'hello' is a string expression (determined by the single quotes)
---typeof true --- boolean because boolean expressions are either true or false
--- 2 === 1 || 3 === 4 ---  Boolean because we are making a comparison between two numbers 
---2 === 1 || 3 === 4 --- False because none of the statements are true



/******************
PROBLEM 3:

Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

|   A   |   B   | A && B| 
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false | 


****************** #####PROBLEM 3 SOLUTIONS###
/*
|   A   |   B   | A || B| 
| true  | true  | true |
| false | true  | true |
| true  | false | true |
| false | false | false| 

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

****************** ####### PROBLEM 4 SOLUTION
|   !A   |   !B | !A &&!B| 
| true  | true  | false  | 
| false | true  | false  |  
| true  | false | false  | 
| false | false |  true  | 




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
######PROBLEM 5 SOLUTIONS
2 + 3 * 2 + 1
    5 * 2 + 1
    5 * 3
    15
        


*/


/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.


******************/
/* ###PROBLEM 6 SOLUTION###
4 / 2 + 8 / 4
    2 + 8 / 4
        2 + 2
           4




/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.
/*############ SOlUTION PROBLEM 7####
 1)Cater +'pi' + 'llar'
 2) 'Caterpi' + 'llar'
 3) 'Caterpillar'



******************/


/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.
/* ###PROBLEM 5 SOLUTION###
1) 2 * 4 == 8 && 'car' + 'pool' === 'carpool'
2) 8 == 8 && 'car' + 'pool' === 'carpool'
3) 8 == 8 && 'carpool' === 'carpool'
4) true && true 
5) true


******************/