// square a number 


// Function Expression
// it cannot be called before it's defined
// console.log(expression(25)); // This would throw an error if placed here.
 const expression = function (number){
      return number * number 
 }

 
 console.log(expression(25))

// Function Declaration
// It can be called even before its declaration (hoisted)
 function declaration(number){
  return  number * number
 }

 console.log(declaration(30))
