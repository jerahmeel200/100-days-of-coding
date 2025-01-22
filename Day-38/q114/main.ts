(() => {
 const studentAndId = new Map<number, string >()

 studentAndId.set(1, "james")
 studentAndId.set(2, "gabby")
 studentAndId.set(3, "john")


 studentAndId.forEach((student, id)=>{
  console.log(`Id:${id} name: ${student}`)
 })


 
})();
 
