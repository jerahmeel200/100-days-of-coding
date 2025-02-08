const findFirstVowel =(str)=>{
const vowel = ['a','e','i','o','u']

for(let i = 0; i < str.length; i++){
  if(vowel.includes(str[i])){
    console.log(`The first vowel in string is ${str[i]} at  index ${i}`)
    return[i]
  } 
 
}
console.log('No vowel found')

return null

}


const result = findFirstVowel('hello')
console.log(result)