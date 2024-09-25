/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const result = new Array(numRows).fill("");
  let flag = -1;
  let arrayIndex = 0;
  for (let i = 0; i < s.length; i++) {
    result[arrayIndex] += s[i];
    if (arrayIndex === numRows - 1 || arrayIndex === 0) {
      flag = -flag;
    }
    arrayIndex += flag;
  }
  return result.reduce((memo, next) => memo + next, "");
};

console.log(convert("PAYPALISHIRING", 3)); // PAHNAPLSIIGYIR
console.log(convert("PAYPALISHIRING", 4)); // PINALSIGYAHRPI
console.log(convert("AB", 1)); // AB
