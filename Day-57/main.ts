 
 
(() => {
//     const greeting = <T extends any[], R>(callback: (...args: T) => R, ...args: T): R => {
//         if (typeof callback === "function") {
//           return callback(...args);
//         } else {
//           throw new Error("It is not a function");
//         }
//       };
      


// const greet = (name: string , age: number)=>{
//     return `my name is ${name} i am  ${age} years old`
// iF/else Task

//  Tasks : what will be the output of the following code?

// if ("0") {
//   alert( 'Hello' );
// } // It will alert 'Hello' because the string "0" is a truthy value.


//   Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’ If the visitor enters “ECMAScript”, 
// then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

let answer = prompt("What is the official name of javaScript?", "")

if(answer === "ECMAScript" ){
  alert("Right!")
}else{
  alert("You don’t know? ECMAScript!")
}


//  Using if..else, write the code which gets a number via prompt and then shows in alert:

// 1, if the value is greater than zero,
// -1, if less than zero,   0, if equals zero.

let number = prompt("Enter a number", "0");   

if(Number(number) > 0){
  alert(1)
}else if(Number(number) < 0){ 
  alert(-1)
}
else if (Number(number) === 0){
  alert(0)
}



// Rewrite this if using the conditional operator '?':

let a: number = 1;
let b: number = 2;
let result: string;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
// resultS using tenery operator
a + b < 4 ? result = "Below" : result = "Over"



// Rewrite if..else using multiple ternary operators '?'.

// For readability, it’s recommended to split the code into multiple lines.

let message : string;

let login = prompt("Enter your login", "");

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

// using ternary operator
login == "Employee" ? message = "Hello" :
login == "Director" ? message = "Greetings" :
login == "" ? message = "No login" : message = ""

 
})();

