 
(()=>{

const multiplyDecimalNumbers = (num1: number, num2:number)=>{
  const product = num1 * num2

  return parseFloat(product.toFixed(2))
}
              
// Example usage:
console.log(multiplyDecimalNumbers(2.345, 1.678)); // Output: 3.94
console.log(multiplyDecimalNumbers(10.55, 0.87));  // Output: 9.19
 

})()












