// This is a comment in JavaScript
/* This is a multi-line comment 
.....
.....
.....
*/
// Strings represent textual data using quotes or backtick "s" 's' or `s`
let first = "John";
let last = "Ibis";
let fullName = first + "" + last; // Concatenation
console.log(fullName); // Output: John Ibis

// Using template literate for easier string interpolation
let fullNameTemplate = `The full name is: ${first} ${last}`;
console.log(fullNameTemplate); //Output:John Ibis

//Common string operations
let sampleString = "Hello, World!";

// Length of the string
console.log(sampleString.toUpperCase()); // Output: " HELLO, WORLD! "

// Convert to lowercase
console.log(sampleString.toLowerCase()); // Output: "hello, world! "

//Trim whitespace
console.log(sampleString.trim()); // Output: "hello, world!"

let x = "Hello";
const y = "world";