const numbers = [12, 1, 5, 7, 11, 22, 57, 6, 40]

const returnNumbersGreaterThanTen =(numbers)=>{
return numbers.reduce((accumulator, currunt)=> accumulator + currunt, 0)

}


console.log(returnNumbersGreaterThanTen(numbers))