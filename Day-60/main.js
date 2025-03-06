//  Functions




// 1. Function Declaration example:
// function name(parameter1, parameter2, ... parameterN) {
 // body
// }
function message(){
  console.log("Hello world!")
}

function showMessage(){
  alert("Hello world!")
  alert("Hello world!")
}

showMessage()
showMessage()


// Local variables
// A variable declared inside a function is only visible inside that function.

// For example:


function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function


// Outer variables
// A function can access an outer variable as well, for example:
let userName = 'John';
 function showMessage(){
  let message = "Hello , " + userName;
  alert(message);
 }

showMessage(); // Hello, John

// Parameters
// We can pass arbitrary data to functions using parameters.

// In the example below, the function has two parameters: from and text.
function showMessage(from, text){
  alert(from + ":" + text)
}
showMessage("Ann", "Hello");
showMessage("Ann", "What's up?");

// Default values
// If a function is called, but an argument is not provided,
//  then the corresponding value becomes undefined.
// to fix this we can use default values.


function showMessage(from , text="no text given"){
  alert(from + ":" + text);
}

showMessage("Ann"); // Ann: no text given

// Alternative default parameters
 
function showMessage(text) {
  // ...

  if (text === undefined) { // if the parameter is missing
    text = 'empty message';
  }

  alert(text);
}

showMessage(); // empty message
function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';
  // ...
}
//Using the  nullish coalescing operator to check for default parameters ??
function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown

// Returning a value
// A function can return a value back into the calling code as the result.
function sum(a, b){
  return a + b
}
sum(1, 2); // 3
// Another example of returning a value
function checkAge(age){
  if(age  >= 18){
    return true;
  }else{
    return confirm("Do you have permission from your parents?")
  }
}

let age = prompt("How old are you?", 18);

if(checkAge(age)){
  alert("Access granted");
}else{
  alert("Access denied");
}

// Using return value  to cause the function to exit immediately
// In the code above, if checkAge(age) returns false, then showMovie won’t proceed to the alert.
function showMovie(age){
  if(!checkAge(age)){
    return;
  }
  alert("Showing you the movie");
}

// A function with an empty return or without it returns undefined
// If a function does not return a value, it is the same as if it returns undefined:

function doNothing() { /* empty */ }

alert( doNothing() === undefined ); // true
// An empty return is also the same as return undefined:

function doNothing() {
  return;
}

alert( doNothing() === undefined ); // true

