 
 const  daysLeft = ()=>{
    // get today's date
 const today = new Date()
//  determine the date of next year
const nextYear = today.getFullYear() +1
const newYear =  new Date(`January 1 ${nextYear}`)
const timeDifference = newYear -  today
const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))
console.log(`There are ${daysRemaining} days left until New Year!`);
console.log(timeDifference)
 }

daysLeft()