 (()=>{
   (()=>{
      const guests :string[] = ["jerahmeel", "james", "kelly"]

      // single out the guest
      const uneableToAttend: string ="kelly"
      console.log(`${uneableToAttend} was not able to make it to the dinner party`)

// replace guest
      let newGuest: string  = "jerry"
      guests[guests.indexOf(uneableToAttend)] = newGuest
      

// new message 
      guests.forEach((guest)=>{
        console.log(`hello ${guest} will you attend my dinner party?`)
      })
   
   })()
 
 })()
