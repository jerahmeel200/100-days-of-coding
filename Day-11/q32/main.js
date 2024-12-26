 
    var new_users = ["john", "marvel", "james"];
    var current_users = ["john", "luke", "rita"];
     

// or you could do like so
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
 
