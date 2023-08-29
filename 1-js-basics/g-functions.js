// Functions are the fundamental building blocks in Javascript.

// A function is basically a set of statements that perform a task or calculates a value.

// We declare a function using the function keyword and give it a name and add parenthesis.

// function greet() this is part of syntax of declaring functions.

// greet(ing) is the name we have given to this function.

function greeting() {
    console.log('Hello World');
}
   greeting();

// What we have here inside the curly braces is what we refer to as the body of this function.

// This is where we add all the statements to define some kind of logic in our application.
 
// For example the logic for this function should be to display a message on the console.

// The message that we are displaying here is 'Hello World'.

// Note that here we have a statement,so we terminate it with a semicolon.But when we are declaring a function,we don't need to add semicolon at the end because we are not declaring it as a variable.

// We can call this function like this,greet(); we add the name of the function and parenthesis and then we add semicolon to indicate that this is a statement.

// To make this more interesting, our function can have inputs and these inputs can change how the function behaves.

function greet(name,lastName,) {

    console.log('Hello' + name + '' +lastName); 
}
    greet('John', 'Smith');
 


// Let's say instead of displaying 'Hello World' we want ot display the name of the person here,'Hello John'.

//  So we can add a variable here in between the parenthesis,we refer to this variable as a parameter.
 
// So the greet function has one parameter called name and essentially name is like a variable that is only meaningful inside of this function.

// So inside of this function we can work with this name variable but it will not be accessible outside of this function.

// Name is an input to this function,so instead of displaying 'Hello World',we can display 'Hello' + name ,we used the plus sign to concatenate two strings, then we add name after.

// When calling the greet function, we need to pass a value for the name variable or the name parameter.

// So we can pass john here,we refer to this as an argument, so John is an argument to the greet function and name is a parameter of the greet function.

//  A parameter is what we have here at the time of declaration,but the argument is the actual valueo f supply for that parameter.

// We can reuse this function but with a different input.


   greet('Mary','Iqra'); // We have two different messages on the console.Which is Hello John and Hello Mary.
    

// A function can have muliple parameters, we can separate parameters using a comma.

// Let's add another parameter like lastname,then we can change our console.log and add a space and then display lastname,using  the plus sign.

// when calling this greet function, we should pass another argument for the lastname.

// But if we don't pass an argument for the lastname,what happens in the console is that Hello John as undefined beacuse the default value of variables in Javascript is undefined so because we did not pass a value for the lastname, by default it is undefined.

// But when we pass an argument for the lastname we  have Hello John Smith in the console.

// Smith is the argument for the lastname and we use a comma to separate the two arguments that is ,John and Smith when we are calling the greet function.
