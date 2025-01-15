 const fruits = ["banana", "apple", "orange"]

 const index = fruits.indexOf("banana") 
 console.log(index)


 if(index !== -1){
    fruits[index] = "mango"
 }

 console.log(fruits)

// YOU CAN DO IT LIKE SO
// const updated =  fruits.map((fruit)=>(
//     fruit === "banana" ? "mango": fruit
//  ))

//  console.log(updated)



 
 