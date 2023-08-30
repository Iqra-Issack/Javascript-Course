//Ternary also known as conditional operator.

// Let's say that we want to implememt a rule like this.

// If a customer has more than 100 points ,
// they are a 'gold' customer,otherwise they are a 'silver' customer.


// Let's first start by declaring a variable to keep track of the number of points.

// Let's declare another variable called type thta represents the type of customer.

let points = 110;
// let type = points > 100;


// Here is where we use the ternary or conditional operator.

// This is how it works, first we start with A condition.We want to compare the number of points with 100.

// So we use the comparison operator here .

// As we have learnt earlier this expression (let type = points > 100) produces a boolean.

// So the result of this expression is either true or false.

// Depending on the result we are going to set this type variable to a different value.

// We add a question mark at the end of this expression.

// let type = points > 100 ? If this expression evaluates to true, that means this is a 'gold' customer,so we want to set type to gold.


let type = points > 100 ? 'gold' : 'silver'

console.log(type);


// Otherwise if this expression evaluates to false we want to set the type to 'silver'. 


// let type = points > 100 ? 'silver'


// This is the ternary or conditional operator.

// We start with a condition ,if that condition evaluates to true, we will  use this value ,otherwise, we will use this other value.

// If we set the points to 110 we will get gold on the console,but if we set the points to 90 we will get silver on the console.
