// example 1
const multiplyDecimalNumbers2 =(num1, num2)=>{
return Math.round(num1 * num2 * 100) / 100
}

// example 2
const  multiplyDecimalNumbers = (num1, num2)=>{
const multiply = num1 * num2

return parseFloat(multiply.toFixed(2))
}


// Example usage:
console.log(multiplyDecimalNumbers2(2.345, 1.678));  
console.log(multiplyDecimalNumbers2(10.55, 0.87));   


// Example usage:
console.log(multiplyDecimalNumbers(2.345, 1.678));  
console.log(multiplyDecimalNumbers(10.55, 0.87));   
