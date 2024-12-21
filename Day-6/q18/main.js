 var places = ["paris", "cuba", "lagos", "abuja", "spain"]

 console.log("original",places) 

//  sort place alphabetically using the sort method
const sorted = [...places].sort()
console.log("sorted", sorted)
 
// reverse alphabetical
const reverseAlphabetical = [...places].sort().reverse()
console.log("reverseAphabetical",reverseAlphabetical)

 

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);

console.log("checking",places)

// using the localeCompare method 
// sortedPlaces.sort((a,b)=> b.localeCompare(a)) // reverse alphabetical
// console.log(sortedPlaces)


// console.log("Original order:", places);

// console.log("Alphabetical order:", [...places].sort());

// console.log("Original order:", places);

// console.log("Reverse alphabetical order:", [...places].sort().reverse());

// console.log("Original order:", places);

// places.reverse();
// console.log("Reversed order:", places);

// places.reverse();
// console.log("Original order:", places);

// places.sort();
// console.log("Alphabetical order:", places);

// places.reverse();
// console.log("Reverse alphabetical order:", places);

