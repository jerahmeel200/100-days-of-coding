(() => {
  // A function that accepts multiple hobbies as arguments

  const logAllHobbies = (...hobbies: string[])=>{
    // iterate through rest parameters
    hobbies.forEach((hobby)=>{
      //print hobbies with statement
      console.log(`I enjoy ${hobby}`)
    })
  }
  
  logAllHobbies("eating", "skating", "runing", "gaming")
})();
