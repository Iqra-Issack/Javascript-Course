// There different types of functions in Javascript.

// This function below is performing a task.Its task to is to display something on the console.

// Performing a task

function greet(name,lastName) {
    console.log('Hello' + name + '' +lastName );
}
    greet('john', 'Smith');

// Sometimes a function calculates something for example.

// Calculating a value

function square(number) {
    return number * number;
}
  square(2);

// We use the return keyword to return this value to whoever is calling this function.

// The return keyword is another reserve keyword so we cannot have a variable called return.

  // We are calling the square function, square(2) we pass 2, this returns a value so we can use that value to initialize a variable.

  // For example we can declare another variable called number,and set it to a square of 2.Then display that on the console.

  let number = square(2);
  console.log(number);

  // In this particular example we don't necessarily have to declare a separate if all we want to do is display the square of 2 on the console.

  // We can exclude the variable declaration and simply pass square of 2 to console.log.

  // When the Javescript engine executes this code,first it is going to call this function,it will get a value and then pass that value to console.

  console.log(square(2)); // We have two function calls in this code.

  // Square of 2 is one function call and console.log is also another function call.

  // Console.log is another function call  here we have parenthesis, so we are calling the log function ,which is defined somewhere,and passing an argument, we can pass a simple string, like Hello or we can pass an expression,that expression can be a call to another function like square of 2.

  // This is the basics of functions. A function is a set of statements that either performs a task,or calculates and returns a value.