// The first category of operators we're going to look at is aithmetic operators.

// We use this for performing calculations.

let x = 10;
let y = 3;

// Here we have two variables x and y.Let's look at all the arithmetic operators in Javascript.

// console.log(x + y);   // This is the addition operator.Arithmetic opeartors usually take two up rands ;x and y.

// What we have here in between the parenthesis, that is (x+y)is refered to as an expression in Javascript.

// An expression is something that produces a value.


console.log(x - y);  // Subtraction operator
console.log(x * y);  // Multiplication opertor
console.log(x / y);  // Division operator
console.log(x % y);  // Reminder of Division operator
console.log(x ** y); //  Exponentiation operator (this is x to the power of y,x^y)


// We have two additional operators that are a little bit tricky.

// Increment operator.

// Increment operator is indicated by two plus signs and depending on where we put the plus signs, this operator will behave differntly. 

console.log(x);

// x is initialized to 10,we see 10 on the console.

// If we put the increment operator before x, the value of x will be incremented by 1 first and then we will see on the console 11.

console.log(++x);

// In contrast if we put this increment operator after x,we will see x on the console first, and then the value of x will be incremented by 1.

// We will see the value of x (which is 10),and then the value of x will be incremented by 1.

console.log(x++); // We should see 10 on the console first.
console.log(x);// We should see 11 on the console because the value of x has been incremented ny 1.


// Decrement operator

// The decrement operator is indicated by two minus signs.

// When we apply the decrement operator before x , we  are going decrement the value of x by 1.

console.log(--x);

// We see 9 on the console, because we apply this operator first and then display x on the console.



