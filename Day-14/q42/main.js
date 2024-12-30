let magicians = ["Gandalf", "Dumbledore", "Merlin", "Houdini", "Potter"];

const show_magicians =(magicians)=>{
  magicians.forEach((magician)=>{
      console.log(magician)
    })
}

 

 const make_great =(magicians)=>{
   for(let i = 0; i < magicians.length; i++){
    magicians[i] = `${magicians[i]} The Great `  
   }
  }

  make_great(magicians)
  show_magicians(magicians)

 


 
