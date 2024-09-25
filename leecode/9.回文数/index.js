/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome2 = function (x) {
  if (x < 0) return false;
  const numbers = [];
  let targetNum = x;
  while (targetNum) {
    const mode = targetNum % 10;
    numbers.unshift(mode);
    targetNum = parseInt(targetNum / 10);
  }

  const convertNum = numbers.reduce(
    (memo, next, index) => memo + next * Math.pow(10, index),
    0
  );
  return convertNum === x;
};

// console.log(isPalindrome2(121));
// console.log(isPalindrome2(123));
// console.log(isPalindrome2(10));

var isPalindrome = function (x) {
  let result = true;
  const str = String(x);
  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    if (str[left] !== str[right]) {
      result = false;
      break;
    }
    left++;
    right--;
  }
  return result;
};

console.log(isPalindrome(121));
console.log(isPalindrome(123));
console.log(isPalindrome(10));
