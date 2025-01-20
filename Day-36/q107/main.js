const divisible = (num) => {
  if (num % 2 === 0 && num % 3 === 0) {
    return `${num} is divisible by 2 and 3`;
  } else {
    return `${num} is not divisible by 2 and 3`;
  }
};

console.log(divisible(12));  



// Another way without the function

const number = 9
if(number % 2 === 0 && number % 3 === 0){
  console.log(`${number} is  divisible by 2 and 3`)
}else{
  console.log(`${number} is not divisible by 2 and 3`)

}

