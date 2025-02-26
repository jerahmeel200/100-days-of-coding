 
 
(() => {

 let logHello = new Promise((resolve, reject)=>{
  setTimeout(()=>{
      resolve("Hello, World!")
  }, 2000)
 })
 
 logHello.then((message)=> console.log(message))
})();

