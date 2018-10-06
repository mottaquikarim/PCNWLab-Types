/******************
PROBLEM 1:

What are the types of the following expressions and what do they evaluate to, and why?

-> 17


{Number (the type of  value is a number)};


-> 1 + 2 * 3 + 4 
{operator. It will try to calculate starting at 2*3 and 1 +4};

-> 800 / 80 / 8

{Operator using divison};


-> 400 > 200

{Operator using comparison 400 is greater than 200};


-> 1 !== 1

{Comparison operator 1 is not the same as 1};


-> true || false

{Or operator truth or false};


-> true && false

{And operator truth and false};


-> 20 % 6

{The modulo or remainder operator 20 remainder 6};


-> 'a' + 'b'

{Strings which are used to represent text}

******************/



/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4

{ Returns the word number because writing 4 is a number not a word. }


-> typeof 'hello'

{Returns string, this is because any word placed in '' will be treated as a string}



-> typeof true

{Returns Boolean because boolean is a type where it can only be true or false.
Here true is written out so boolean is what is understood}


-> 2 === 1 || 3 === 4


{Returns false because 2 does not equal 1 nor does or 3 equals 4}
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



{
|   A   |   B   | A || B| 
| true  | true  | true  |
| false | true  | true |
| true  | false | true|
| false | false | false | 

}

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



{

|   A   |   B    | !A &&!B| 
| true  | false  | false  |
| false | false  | true   |
| true  | true   | false  |
| false | true   | false  | 

}

******************/



/******************
PROBLEM 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1. 



{
 2 + 3 * 2 + 1. 
  2 + 6 + 1
     8 + 1
        9  

}
For reference, here is a exp of a step-by-step evaluation:
1 + 2 + 3 + 4
    3 + 3 + 4
        6 + 4
           10


******************/



/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.



{
4 / 2 + 8 / 4
    2 + 2
        4

}

******************/



/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.

{
    'ca' + 'ter' + 'pi' + 'llar'
        cater + 'pi' +'llar'
            'cater' + 'pillar
                'caterpillar'

}



******************/


/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.


{
2 * 4 === 8 && 'car' + 'pool' === 'carpool'.
    8 === 8 && 'car +'pool' === 'carpool'
        true && 'car +'pool' === 'carpool'
             true && 'carpool' === 'carpool'
                true && true
                    true
}                   



******************/