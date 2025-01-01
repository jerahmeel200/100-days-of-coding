const logAllHobbies = (...hobbies)=>{
  // iterate through rest parameters
  hobbies.forEach((hobby)=>{
    //print hobbies with statement
    console.log(`I enjoy ${hobby}`)
  })
}

logAllHobbies("eating", "skating", "runing", "gaming")
