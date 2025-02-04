 
 
(() => {
 
  console.log("Start")

  setTimeout(()=>{
  console.log(" timeOut callback excecuted")
  }, 0)
  
  
  Promise.resolve().then(()=>{
      console.log("Promise Callback excecuted")
  })
  
  
  
  console.log("End")
  
  //OUTPUT
  // Start
  // End
  // Promise callback
  // Timeout callback
  
  
  //  This demonstrates how JavaScript prioritizes Microtasks before 
  // handling Macrotasks, ensuring a smooth, non-blocking execution flow.

 
})();

