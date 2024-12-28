 (()=>{
  // In this case, explicitly assigning the types (size: string and text: string) is not strictly necessary because TypeScript 
  // can infer the types from the default values provided. However, including the type annotations is generally a good practice
  //  as it makes your code more explicit and easier to understand and  to viod ambiguity.
  const make_shirt = (size: string ="large", text: string="i love typescript") =>{
 
    console.log(`The size of the shirt is ${size} and the text on the shirt is ${text}`)
  }
  make_shirt()
  make_shirt("medium")
  make_shirt("small", "I love Python")
   
  
   

 })()