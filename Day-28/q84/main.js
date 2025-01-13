 
 function replaceWord1(str){
     return str.replace(/Javascript/g, "TypeScript")
 }

 console.log( replaceWord1("i love writing Javascript code")
)

 //OR WE CAN DO IT LIKE SO
function replaceWord2(str){
    return str.replaceAll("Javascript", "TypeScript")
}
console.log( replaceWord2("i love writing Javascript code"))

// OR LIKE SO
function replaceWord3(str){
return str.split("Javascript").join("TypeScript")
}

console.log( replaceWord3("i love writing Javascript code"))

