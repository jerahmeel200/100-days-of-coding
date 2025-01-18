 
(()=>{
 
 const getBirthday = (month: number, day: number): Date =>{
const today = new Date()
const year = today.getFullYear()

const birthday = new Date(year, month -1, day)

if(birthday < today){
  birthday.setFullYear(year+1)
}
return birthday
 }
  
const nextBirthday = getBirthday(2,12)

console.log(`your next birthday is ${nextBirthday.toLocaleDateString()}`)
})()

 











