const greeting = (callback, ...args)=>{
    if(typeof(callback) === "function"){
        return  callback(...args)
    }else{
        throw new Error("not a function")
    }
 
}


const greet = (name, age)=>{
    return `my name is ${name} i am ${age} years old `
}





console.log(greeting(greet, "Alice", 35))