/******************
PROBLEM 1:

What are the types of the following expressions and what do they evaluate to, and why?

-> 17
17 is a number

*/
console.log(17);
/*

-> 1 + 2 * 3 + 4
*/
// All numbers would multiply 2 & 3 first then add 1 & 4 = 11
/*(2*3) = 6 
 6+1 = 7
 7+4 = 11  
 */
console.log(1 + 2 * 3 + 4);

/*
-> 800 / 80 / 8

 800 would be divided first by 80, the product would then be divided by 8
 (800 / 80) = 10
 10 / 8 = 1.25

*/
console.log(800 / 80 / 8);

/*
-> 400 > 200

Statement would produce a boolean. 
 400 is greater (>) than 200 therefore is true.
*/
 console.log(400 > 200)
/*
-> 1 !== 1

 !== is a comparison operator. 1 !== 1 would yield a false because 1 === 1

*/
 console.log(1 !== 1);

/*
-> true || false

|| is a comparison operator. If an either side of the comparison is true the output is true.
In this case, true is true so the output is true.

*/
console.log(true || false);
/*

-> true && false
 && is a comparison operator. Both statements must be true for it to yield true.
 In this case one side is false therefore it will output false.
*/
console.log(true && false);
/*

-> 20 % 6
% is the modulo operator. It returns the remainder. 6 goes into 20, 3 times with a remainder of 2. 
The output would be 2. 
*/
console.log(20%6);
/*

-> 'a' + 'b'
 'a' and 'b' are both strings, the + operator will join both strings together in the output. 

*/
console.log('a' + 'b');
/*
******************/



/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4
4 is a number 
*/
console.log(typeof 4);
/*

-> typeof 'hello'
hello is inside quotes and read as a string
*/
console.log(typeof 'hello');
/*

-> typeof true
true is a boolean
*/
console.log(typeof true);
/*


-> 2 === 1 || 3 === 4

both statements would yield false. So the output of the comparison would yield false
*/
console.log(2 === 1 || 3 === 4);
/*

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

|   A   |   B   |  !A   |   !B   | !A &&!B| 
| true  | true  | false | false  | false  |
| false | true  | true  | false  | false  |
| true  | false | false | true   | false  |
| false | false | true  |  true  | true   | 

*/

/*
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
/*

2 + 3 * 2 + 1

6 + 2 + 1

8 + 1

9

*/
console.log (2 + 3 * 2 + 1);

/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.

4 / 2 + 8 / 4

2 + 8 / 4

2 + 2

4

*/
console.log(4 / 2 + 8 / 4);
/*
******************/



/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.

'ca' + 'ter' + 'pi' + 'llar'

'cater' + 'pi' + 'llar'

'caterpi' + 'llar'

'caterpillar'
*/
console.log('ca' + 'ter' + 'pi' + 'llar');
/*

******************/


/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.

2 * 4 === 8 && 'car' + 'pool' === 'carpool'

8 === 8 && 'car' + 'pool' === 'carpool'

true && 'car +  'pool' ==== 'carpool'

true && 'carpool' ==== 'carpool'

true && true

true

*/
console.log(2 * 4 === 8 && 'car' + 'pool' === 'carpool');
/*
******************/