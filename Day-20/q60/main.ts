
(()=>{
  const userProfile = (() => {
    const name = "Alice";
    const age = 33
   
    return {
     printProfile: ()=> {
       console.log(`My Name is ${name} i am ${age} years old `)
     }
    }
       
   })();

   userProfile.printProfile()
})()












