// if(condition) {
//     // code to be run if condition is truthy
// } else {
//     // code to be run if condition is falsy
// }

// implement an if/else if/else which is going to print 
// * the firstName and the lastName (if they existe)

// if (person.name) {
//   console.log(`The name of the person is: ${person.name}.`);
// } else {
//   console.log(`No name is provided.`);
// }



// **JavaScript is lazy.
//  It will want to do the least amount of work possible
//  to get its return value.**

// With the AND operator: 
// JavaScript will first try to return the first falsy value.
// If none were found, it will return the last truthy value.

// Short circuiting

// const person = {
//   firstName: null,
//   lastName: 'Soltis',
// }

// AND (&&) Operator => If there is only one value that is falsy it's done.
// console.log(person.firstName && person.lastName); // TRUE

// if (person.firstName && person.lastName) {
//   console.log("There is a first and lastname");
// } else if (person.firstName || person.lastName) {
//   console.log("We have at least a name");
// } else {
//   console.log("You gotta have a name sir")
// }