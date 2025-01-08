const letInLoop = () => {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
};
letInLoop();

// The let keyword creates a block-scoped variable, which means the variable is only accessible within the block
//  where it's declared (in this case, inside the for loop).
// The variable i is scoped to each iteration of the for loop.
// This means that each time the loop runs, a new i is created with its own value for that specific iteration.
// The value of i is only visible inside the for loop and is not accessible outside of it.
// If you tried to access i outside of the loop, you'd get
//  a ReferenceError since i doesn't exist in the outer scope:
// console.log(i); // ReferenceError: i is not defined
// This is different from var, which is function-scoped
// (or globally scoped if declared outside a function).
// If i were declared with var, it would be accessible outside
// the loop, which could cause unintended behavior.
