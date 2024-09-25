/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const numbers = [];
  let num = Math.abs(x);
  while (num) {
    const mode = num % 10;
    numbers.unshift(mode);
    num = parseInt(num / 10);
  }

  let result = numbers.reduce((memo, next, index) => {
    return memo + next * Math.pow(10, index);
  }, 0);
  result = result * (x < 0 ? -1 : 1);

  if (result > Math.pow(2, 31) - 1 || result < Math.pow(2, 31) * -1) {
    return 0;
  }
  return result;
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(0)); // 0
console.log(reverse(10)); // 1
console.log(reverse(1534236469)); // 0
