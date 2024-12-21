 (()=>{
    
  var guests : string[] = ["jerahmeel", "james", "kelly"];


   // the  push method adds larry to the end of the  array list
   guests.push("larry")
   // the unShift() method adds charlse to the start of the  array 
  
   // the splice method add joshua to the middle of the array 
   guests.splice(guests.length / 2, 0, "joshua")

 // this prints out the message 
      guests.forEach((guest)=>{
        console.log(`hello ${guest} will you attend my dinner party?`)
      })

      
    console.log("turns out  i only have  2 space for 2 guest only sorry about that")

    while ( guests.length > 2){
        let removedGuests = guests.pop()

        console.log(`sorry ${removedGuests} you have been removed from the  guest list`)
    }


guests.splice(0, guests.length) 
console.log(guests)
   
   })()
 
 
