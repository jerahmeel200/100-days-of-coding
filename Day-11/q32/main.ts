 (()=>{

    let  new_users: string[]  = ["john", "marvel", "james"]
 let  current_users : string[]   = ["john", "luke", "rita"]
 

 let curentUserLower = current_users.map((user)=> user.toLowerCase())

 curentUserLower.forEach((user)=>{
    if(new_users.includes(user)){
        console.log(`${user} already exists, please enter a new username`)
    }else{
        console.log(`${user} is available`)
    }
 })


 
//  you could do this without using map
new_users.forEach((newUser) => {
    if (
      current_users.some(
        (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
      )
    ) {
      console.log(`${newUser} will need to enter a new username.`);
    } else {
      console.log(`${newUser} is available.`);
    }
  });
 

 
  
  
  
 })()