 
(()=>{
  // Student blueprint interface
interface Student {
  name: string
  age: number
  classes: string [] 
}
 
// an example of student with the blueprint
const studentTemplate: Student = {
  name: "john",
  age: 45,
  classes: ["english", "chemistry", "ecnomics"]
}
 
 
 

console.log(studentTemplate)
   // We're using the blueprint to make sure our student has a name,
// age, and list of courses.
})()












