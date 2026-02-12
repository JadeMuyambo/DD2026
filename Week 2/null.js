// intentional
let data = null;

console.log(data); // Output:null
console.log(typeof data); //Output: object

// Assigning a value to the variable
data = "something";
console.log(data); //Output: something
console.log(typeof data); // Output: string

// when declaring variables without initial values:
let info = ""; // variable declared but not assigned any value;
console.log(info); //Output: undefined
console.log(typeof info); //Output: undefined