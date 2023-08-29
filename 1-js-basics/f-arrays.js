// Sometimes we might be dealing with a list of objects for example,the list of items in a shopping list.

// In situation like this we can use an array to store that list.

// An array  in JavaScript is a type of global object that is used to store data.

// Arrays use numbered indices starting from 0 to access specific items.

// We declare an array using the keyword let in Javascript.

// let pickedColors = ['red','blue']; 
// console.log (pickedColors);

//[] This square brackets are what we call array literal.And they indicate an empty array,we can initialize it by adding a couple of items in it.

// In the console we get two elements in our array.

// Note that each element has an index that determines the position of that element in that array.

// If we want to access an element in an array we use this index.

let pickedColors = ['red','blue'];
console.log (pickedColors[0]);

// In the previous lessons, we have mentioned that Javascript is a dynamic lahguage, So the the type of variables can change at run time.

// The same principles apply to an array.So the length of arrays as well as the type of objects we have in an array are dynamic

 pickedColors[2] = 'green'; 
console.log (pickedColors);

// The output on the console is "red","blue","green"

// In Javascript unlike other programming languages,we can store different types in an array.

pickedColors[2] = 1;
console.log(pickedColors);

// In the console the output shown is "red","blue",1.

// Technically an array is an object in Javascript,we can look at the properties of this array using the dot notation.

// Every we declare an array using square brackets, that array will automatically recieve these properties.

// The length property returns the number of items in an array.

pickedColors[2] = 1;
console.log(pickedColors.length);

// The output in the console shows 3. 
