// In the last lesson we have learnt about equality operator.

console.log(1 === 1);

// In Javescript we have another equality operator that is indicated by 2 equal signs instead of 3 equal signs.

console.log(1 == 1);

// The difference is that the equality operator with the 3 equal signs is called Strict Equality,while the one with 2 equal signs is called Lose equality.

// console.log(1 === 1); This strict equality operator ensures that both these values we have on the sides of this operator have the same type and same value.

// On both sides of console.log(1 === 1;) this operetor we have two numbers.So their type as well as their value are equal.

// We get true and true on the console after running the code.

// If we change one of the numbers to a string  and save the changes.
 
console.log('1' === 1); // This expression is going to evaluate to false because here we are comparing a string with a number.

// So the types here do not match, that is why we get a false.

// The strict equality ensures that both uprand have the same type and of the same value.

// Lose equality operator behaves differently.

console.log(1 == 1); // we get true on the console because we are comparing 1 with 1.
console.log('1' == 1); // we still get true.

// In contrast to the previous example we got false,in this case these operator looks at the value on the left side,here we have a string '1'so it will automatically convert what we have on the right side to a string.

// So it will look like this console.log('1' == '1') and now because the values are exactly the same we get true on thr console.

console.log(true == 1);

// What if on the left side we have a boolean,this operator looks at what we have on the left side,because it is a boolean,it will automatically the value on the right side to a boolean.

//  It is like comparing true to true and when we save the changes,we get true on the console.

// Lose equality operator will only check if the values are equal.

// Most of the time we should be using the strict equality operator because it is more precise anad accurate.