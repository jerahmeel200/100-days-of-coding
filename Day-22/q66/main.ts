(() => {
  var checkBothTrue = function (num1: boolean, num2: boolean) {
    return num1 && num2;
  };
  console.log(checkBothTrue(true, true));
  console.log(checkBothTrue(true, false));
})();
