const obj = {
  name: "Alice",
  greet: function () {
    console.log("Outer this:", this.name); // 'this' refers to obj, so it logs "Alice"

    //  logs Alice because of arrow function. without the arrow function, it would log undefined
    // we can use bind to bind the this keyword to the function or set the this keyword to a variable and use the variable in the function
    //  if the function keyword is used it  does not have access to the outer funtion that has the this
    const sayHi = () => {
      console.log("Inner this:", this.name);
    };

    sayHi();
  },
};

obj.greet();
