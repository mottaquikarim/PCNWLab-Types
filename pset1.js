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
// number evaluates to 17
console.log(17);

// number, evaluates to 11
// 1 + 2 * 3 + 4 = 1 + 6 + 4 = 11 
console.log(1 + 2 * 3 + 4);

// number, evaluates to 1.25
// 800 / 80 / 8 = 10 / 8 = 1.25
console.log(800/80/8);

// boolean, evaluates to true because 400 > 200
console.log(400>200);

// boolean, evaluates to false because 1 === 1
console.log(1!==1);

// boolean, evaluates to true, because true or false is true
console.log(true || false);

// boolean, evaluates to false, because true and false is false
console.log(true && false);

// number, evaluates to 2; 20 mod 6 = 2 (20/6 results in remainder = 2)
console.log(20 % 6);




/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4
-> typeof 'hello'
-> typeof true
-> 2 === 1 || 3 === 4

******************/
// typeof 4 returns number
console.log (typeof 4);
// typeof 'hello' returns string
console.log(typeof 'hello');
// typeof true returns boolean
console.log(typeof true);
// type of 2===1 || 3===4 returns false
// either 2===1 (false), or 3===4 (also false)
console.log(2===1 || 3===4);



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
/* Truth table for A || B
|   A   |   B   | A || B| 
| true  | true  | true  |
| false | true  | true  |
| true  | false | true  |
| false | false | false |
*/
console.log(true || true); 
console.log(false || true); 
console.log(true || false); 
console.log(false || false); 


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
/* Truth table for !A && !B
|   A   |   B   |   !A   |   !B   | !A && !B| 
| true  | true  | false  | false  | false |
| false | true  | true   | false  | false |
| true  | false | false  | true   | true  |
| false | false |  true  | true   | false | 
*/
console.log(!true && !true);   // false
console.log(!false && !true);  // false
console.log(!true && !false);  // false
console.log(!false && !false); // true

/******************
PROBLEM 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1. 

For reference, here is a exp of a step-by-step evaluation:
1 + 2 + 3 + 4
    3 + 3 + 4
        6 + 4
           10

******************/
/* Solution to PROBLEM 5:
2 + 3 * 2 + 1
2 +     6 + 1
        8 + 1
            9
*/
console.log(2 + 3 * 2 + 1);

/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.


******************/



/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.



******************/


/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.


******************/