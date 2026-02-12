// non-primitive data type: Objects are used to store collections of data and more compplex entities
let person ={
    firstName: "John",
    lastName: "Doe",
    age:30,
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001"

    }
};
console.log(person); //Output: entire person object

console.log(person.firstName); // Output: John
console.log(person.address.city); // Output: New York

person.email = "jkm155@miami.edu"; // Adding a new property
console.log(person); // Output: 

let person1 = {}; // Creating an empty object
person2.firstName = "Jane";
person2.lastName = "Smith";
person.age = "25";