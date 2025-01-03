(() => {
  const createObjectWithDinamicKey =(key: string , value: string )=>{
    let dinamicObject = {}
    dinamicObject[key] = value
    return dinamicObject
  }
  
  let updated = createObjectWithDinamicKey("javascript", "objects")
   
    console.log(updated)
  
   
    
})();
