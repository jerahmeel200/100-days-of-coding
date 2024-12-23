let car = 'subaru';

// Test 1: True, "car" is assigned "subaru" and compared with strict equality.
console.log("Test 1: Evaluates to True");
console.log(car === 'subaru'); // true

// Test 2: True, "car" is not assigned "toyota", so the strict inequality is true.
console.log("Test 2: Evaluates to True");
console.log(car !== 'toyota'); // true

// Test 3: False, JavaScript is case-sensitive, "subaru" is not equal to "Subaru".
console.log("Test 3: Evaluates to False");
console.log(car === 'Subaru'); // false

// Test 4: True, "car" equals "subaru" and does not equal "toyota".
console.log("Test 4: Evaluates to True");
console.log(car === 'subaru' && car !== 'toyota'); // true

// Test 5: True, "car" is not equal to "Subaru".
console.log("Test 5: Evaluates to True");
console.log(car !== 'Subaru'); // true

// Test 6: False, "subaru" is not equal to "Subaru".
console.log("Test 6: Evaluates to False");
console.log(car === 'Subaru'); // false

// Test 7: False, "car" is not assigned the value "toyota".
console.log("Test 7: Evaluates to False");
console.log(car === 'toyota'); // false

// Test 8: True, "car" is "subaru" and also not "toyota".
console.log("Test 8: Evaluates to True");
console.log(car === 'subaru' && car !== 'toyota'); // true

// Test 9: False, "car" is not assigned the value "ford".
console.log("Test 9: Evaluates to False");
console.log(car === 'ford'); // false

// Test 10: True, "car" is assigned the value "subaru".
console.log("Test 10: Evaluates to True");
console.log(car === 'subaru'); // true

