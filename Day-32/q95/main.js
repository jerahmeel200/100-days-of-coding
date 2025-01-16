const numbers = [12, 1, 5, 7, 11, 22, 57, 6, 40]

const returnNumbersGreaterThanTen =(numbers)=>{
 return numbers.filter((number)=> number > 10)

}


console.log(returnNumbersGreaterThanTen(numbers))