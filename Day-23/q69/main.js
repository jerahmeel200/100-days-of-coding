(function () {
    var divideAndRemainder = function (dividend, divisor) {
        var quotient = Math.floor(dividend / divisor);
        var remainder = dividend % divisor;
        return { quotient: quotient, remainder: remainder };
    };
    var test = divideAndRemainder(3, 10);
    console.log(test);
})();
