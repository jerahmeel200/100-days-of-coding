(() => {
  const traditionalFunntion = function (a: number, b: number): number {
    return a + b;
  };
  
  const arrowFunction = (a: number, b: number): number => {
    return a + b;
  };
  
  console.log(traditionalFunntion(2, 3));
  console.log(arrowFunction(2, 3));
  
})();
