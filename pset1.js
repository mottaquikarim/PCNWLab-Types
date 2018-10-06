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

/*****************
PROBLEM 1 Solution:

-> 17                   number; evaluates to 17; becuz it's just the number 17
-> 1 + 2 * 3 + 4        number; evaluates to 11; becuz 1 + 6 + 4 = 7 + 4 = 11
-> 800 / 80 / 8         number; evaluates to 1.25; becuz 10 / 8 = 1.25
-> 400 > 200            boolean; evaluates to true; becuz 400 is larger than 200
-> 1 !== 1              boolean; evaluates to false; becuz 1 is equals to 1
-> true || false        boolean; evaluates to true; becuz of the operator or, as long as one side evaluates to true, the answer is true
-> true && false        boolean; evaluates to false; becuz of the operator and, both sides need to be the same to return true
-> 20 % 6               number; evaluates to 2; becuz 20 modulus 6 = 20 / 6 = 3 remainder 2
-> 'a' + 'b'            string; evaluates to ab; becuz when you add 2 strings, javascript concatenates the strings

*******************/

/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4
-> typeof 'hello'
-> typeof true
-> 2 === 1 || 3 === 4

******************/

/****************
PROBLEM 2 Solution:

-> typeof 4             number; becuz 4 is a number
-> typeof 'hello'       string; becuz the quote syntax makes the data type a string
-> typeof true          boolean; becuz true or false are boolean types when you don't have quotes around it
-> 2 === 1 || 3 === 4   false; becuz it evaluates to false || false, which means neither one is true

 ****************/

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

/***************** 
PROBLEM 3 Solution:

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

******************/

/*****************
PROBLEM 4 Solution:
|   A   |   B   |  !A   |    !B   | !A &&!B| 
| true  | true  | false |   false | false  |
| false | true  | true  |   false | false  |
| true  | false | false |   true  | false  |
| false | false | true  |   true  | true   | 

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

/*****************
PROBLEM 5 Solution:
2 + 3 * 2 + 1
    2 + 6 + 1
        8 + 1
            9
******************/

/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.


******************/

/*****************
PROBLEM 6 Solution:
4 / 2 + 8 / 4
    2 + 8 / 4
    2 + 2
        4
******************/


/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.

******************/

/*****************
PROBLEM 7 Solution:
'ca' + 'ter' + 'pi' + 'llar'
     'cater' + 'pi' + 'llar'
          'caterpi' + 'llar'
               'caterpillar'
******************/


/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.

******************/

/******************
PROBLEM 8 Solution:
2 * 4 === 8 && 'car' + 'pool' === 'carpool'
    8 === 8 && 'car' + 'pool' === 'carpool'
    8 === 8 &&      'carpool' === 'carpool'
       true && true
               true
******************/
