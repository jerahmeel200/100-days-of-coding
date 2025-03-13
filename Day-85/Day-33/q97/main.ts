 
(()=>{
 
 const currentDate = ()=>{
  const now = new Date()
  const day = String(now.getDay()).padStart(2, "0")
  const month = String(now.getMonth() +1).padStart(2, "0")
  const year = now.getFullYear()

  return `${day}-${month}-${year}`
 }
   
 console.log(currentDate())
})()

 











