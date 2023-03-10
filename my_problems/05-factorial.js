/***********************************************************************
Write a recursive function called `factorial` that takes an integer, `num`,
and returns the factorial of `num`.

A factorial is the number get when multiplying a number by itself minus one
all the way down to 1 (but not 0)! We represent them with an exclamation
point, also sometimes called a "bang" in programming.

5! = 5 x 4 x 3 x 2 x 1 = 120

Examples:

factorial(1); // => 1
factorial(3); // => 6
factorial(5); // => 120
***********************************************************************/

// !!!Start
function factorial(num) {
    if (num === 1) {
        return 1;
    }

    return num * factorial(num - 1);
}
// !!!End

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = factorial;
} catch {
    module.exports = null;
}