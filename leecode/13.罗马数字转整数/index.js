/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const specialChar = {
    I: ["V", "X"],
    X: ["L", "C"],
    C: ["D", "M"],
  };
  let result = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];
    if (
      i + 1 <= s.length - 1 &&
      specialChar[char] &&
      specialChar[char].includes(s[i + 1])
    ) {
      result -= map[char];
    } else {
      result += map[char];
    }
  }
  return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
