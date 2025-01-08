 
(()=>{
 const divideAndRemainder = (dividend: number , divisor: number)=>{
const quotient: number = Math.floor(dividend / divisor)
const remainder: number = dividend % divisor

return {quotient, remainder}

 }

const test =    divideAndRemainder(10, 3)       

 
console.log(test)
})()












