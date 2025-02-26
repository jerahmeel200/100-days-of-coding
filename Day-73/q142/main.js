let logPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Hello, World!");
    }, 2000)
})
 

 logPromise.then((message)=> console.log(message))