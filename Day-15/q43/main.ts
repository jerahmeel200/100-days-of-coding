(() => {
  let magicians: string[] = [
    "Gandalf",
    "Dumbledore",
    "Merlin",
    "Houdini",
    "Potter",
  ];

  const  make_great = (magicians: string[]) =>{
    let greateMagicians: string[] = []
    magicians.forEach((magician)=>{
      greateMagicians.push(`${magician}, The Great`)
    })

    return greateMagicians
  }

const show_magicians = (magicians: string[])=>{
magicians.forEach((magician)=>{
  console.log(magician)
})
}

const modifiedArray = make_great(magicians.slice())

console.log("Original magicians:");
show_magicians(magicians);  
console.log("Great magicians:");
show_magicians(modifiedArray);  

})();
