 
 
(() => {
const pizza = new Promise<string>((resolve, reject)=>{
    setTimeout(() => resolve("Pizza Delvered"), 2000)
})
const burger = new Promise<string>((resolve, reject)=>{
    setTimeout(() => resolve("Pizza Delvered"), 1500)
})
const drinks = new Promise<string>((resolve, reject)=>{
    setTimeout(() => resolve("Pizza Delvered"), 1000)
})

// if one of the orders reject of fail the catch will trigger

// Promise.all([returns all the Promise in a array if one of the promise fail
//  the carch will trigger and it will not  return any of the resolved promise ])
Promise.all([pizza, burger, drinks])

.then((message)=> console.log(message))
.catch((error)=>{
    console.log("One of the orders failed", error)
})

//  Promise.all is used to wait for all three promises to resolve, and then it logs the array of their results, [],
//  to the console. This shows how Promise.all can handle multiple promises simultaneously.

 
})();

