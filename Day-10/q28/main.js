
var age = 18

if (age < 2) {
  console.log("The person is a baby.");
} else if (age < 4) {
  console.log("The person is a toddler.");  
} else if (age < 13) {
  console.log("The person is a kid.");
} else if (age < 20) {
  console.log("The person is a teenager.");
} else if (age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}




// Why Use &&?
// It narrows the range, ensuring no overlap.
// It makes conditions more specific, allowing each block to execute correctly.
// var age = 18

// if(age < 2){
//     console.log("The person is a baby");
// }else if(age = 2 && age  < 4){
//     console.log("The person is a toddler")
// } else if (age = 4 && age < 13){
//     console.log("The person is a kid")
// }else if (age = 13 && age < 20){
//     console.log("The person is a teenager")
// }else if(age = 20 && age < 65){
//     console.log("The person is an adult")
// }else if(age >= 65){
//     console.log("The person is an elder")
// }