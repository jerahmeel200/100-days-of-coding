// Arrow Functions

// let func = (arg1, arg2, ..., argN) => expression;

let func = function(arg1, arg2,  argN) {
  return expression;
};

// Example  

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

let sun = (a,b)=> a+b
console.log(sum(2,3)); // 5

// if we have only one argument, then we can omit the parentheses

let double = n => n * 2;
console.log(double(3)); // 6

// if there are no arguments parenthesis must be present

let sayHi = () => console.log('Hello');
sayHi(); // Hello

// Arrow function expression
let age = prompt("What is your age?", 18);

let welcome = ( age < 18) ? ()=> console.log("Hello") : ()=> console.log("Greetings");
welcome(); // Greetings

// Multiline arrow functions
let sum = (a, b)=>{
  let result = a + b
return result
}
console.log(sum(2,3)); // 5


// JavaScript Specials