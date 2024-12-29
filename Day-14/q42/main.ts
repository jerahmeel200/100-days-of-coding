(() => {
  let magicians: string[] = [
    "Gandalf",
    "Dumbledore",
    "Merlin",
    "Houdini",
    "Potter",
  ];

  const show_magicians = (magicians: string[]) => {
    magicians.forEach((magician) => {
      console.log(magician);
    });
  };

  const make_great =(magicians: string[])=>{
    for(let i = 0; i < magicians.length; i++){
      magicians[i] = magicians[i] + " the Great"
    }
  }

  make_great(magicians);
  show_magicians(magicians);
})();
