 const constTest = "john"
 let letTest = "tom"


 
 letTest="jude" // works fine because let allows reassignment 

 
// const variable 
try {
  constTest= "jerry" // Uncaught TypeError: Assignment to constant variable. the const does not allow reassignment
} catch (error) {
  console.log("Error: cant reassaign a const variable ")
}

 console.log(constTest)
 console.log(letTest)
