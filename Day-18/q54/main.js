const createObjectWithDinamicKey =(key, value)=>{
  let dinamicObject = {}
  dinamicObject[key] = value
  return dinamicObject
}

let updated = createObjectWithDinamicKey("javascript", "objects")
 
  console.log(updated)