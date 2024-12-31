 let laptop ={
  make: "Dell",
  model: "latitude D630",
  year: "2013", 
  describe: function (){
    console.log(`this is a ${this.year} ${this.make} ${this.model}.`)
  }
 }
laptop.describe()

// OR  YOU CAN  USE THE MAP METHOD
// const describe = ()=>{
//   laptop.map((item)=>{
//     console.log(`the laptops is made by ${item.make} and the model is ${item.model} produced in the year ${item.year}`)
//   })
// }


// describe()