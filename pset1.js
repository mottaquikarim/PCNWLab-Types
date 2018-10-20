
/*PROBLEM 1:

What are the types of the following expressions and what do they evaluate to, and why?
*/
console.log (typeof 17); //asks for the type of value which shows a number. the evaulation is number
console.log (1 + (2 * 3) + 4); /*asks for a computation of the expression. first evaluates in pemdas order. 
                                2*3
                                1+(6)+4
                                7+4=11*/
console.log ((800 / 80) / 8);/*  evaluates the expression with pemdas. 
                                therefore first evaluate 800/80=10
                                                         10/8=1.25*/
console.log (400 > 200); /* compares the two numbers. determines if 400 is more than 200. 
                            gives a boolean value of true because 400 is in fact bigger than 200*/
console.log (1 !== 1);   /*  compares that 1 is not equal to 1. the answer is false because 1 is in fact 1*/ 
console.log (true || false); /* asks if eitheir of the two values is true.*/
console.log (true && false); /* compares that both statements on eithier side of the opeator are true*/
console.log (20 % 60); /*shows the remainder from the division. */
console.log ('a' + 'b'); /*combines and adds both both strings */





/*
PROBLEM 2:

What will the following return? Why?


-> typeof 4  will return number because the 4 is a type of number
-> typeof 'hello' will return string because hello is a string 
-> typeof true will return boolean because true is a boolean type
-> 2 === 1 || 3 === 4 will return false because both evaluations are false. 2 is not 1 and 3 is not 4. 

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

ANSWER: 
|   A   |   B   | A || B| 
| true  | true  | true |
| false | true  | true |
| true  | false | true|
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


ANSWER: 
|   A   |   B   |   !B   | !A    | A && !B| 
| true  | true  | false  | false |  false|
| false | true  | false  | true  |  true|
| true  | false | true   | false |  true|
| false | false |  true  | true  | false|



******************/



/******************
PROBLEM 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1. 

For reference, here is a exp of a step-by-step evaluation:
1 + 2 + 3 + 4     
    3 + 3 + 4
        6 + 4
           10

******************/

/* 2 + 3 * 2 + 1
       6 *2  +1
         12  +1   
            13
*/





/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.


4 / 2 + 8 / 4.
(4/2)+ (8/4)
    2+ (8/4)
       2+ 2 
          4  

******************/



/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.

cater + pi+ llar
caterpi + llar
caterpillar

******************/


/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.
shows to be true
2*4===8 && carpool === carpool
8===8  && true
true && true
true
******************/