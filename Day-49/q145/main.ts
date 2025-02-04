 
 
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
// }




// This function accepts a callback function and 
// invokes it with given arguments
function executeCallback(
    callback: (arg1: number, arg2: number) => void,
    arg1: number,
    arg2: number
  ): void {
    callback(arg1, arg2); 
    // Invokes the callback with the specified arguments
  }
  
  // Example callback function that adds two numbers
  const add = (a: number, b: number) => {
    console.log(a + b); // Outputs the sum of a and b
  };
  
  executeCallback(add, 5, 3); // Outputs: 8
  // Demonstrates invoking a callback function with
  // arguments to perform an addition.
  

 
})();

