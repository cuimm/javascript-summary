/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = strs[0]; // 假定最长公共前缀为数组中的第一个

  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    for (; j < result.length && j < strs[i].length; j++) {
      if (result[j] !== strs[i][j]) {
        break;
      }
    }
    result = result.slice(0, j); // 不断缩小字符串范围
  }

  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
