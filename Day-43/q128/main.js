const multipleProducts = (...numbers)=>numbers.reduce((total, number) => total * number, 1)




console.log(multipleProducts(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) // 3628800