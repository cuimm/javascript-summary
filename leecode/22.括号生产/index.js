/**
 * 【递归】+【回溯】
 * 思路：
 * 就是不停选括号，要么选左括号，要么选右括号。
 *
 * 约束：
 *  1. 只要(有剩，就可以选(。 (((((这么选，都还不能判定为非法。
 *  2. 当剩下的)比(多时，才可以选)，否则，)不能选，选了就非法。
 *  3. 因为：剩下的)比(少，即，使用的)比(多，不能成双成对。
 *
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  function dfs(leftRemain, rightRemain, str = "") {
    if (leftRemain === 0 && rightRemain === 0) {
      // 递归结束条件
      res.push(str);
      return;
    }
    if (leftRemain > 0) {
      // 左括号有剩余，就可以选择左括号
      dfs(leftRemain - 1, rightRemain, str + "(");
    }
    if (rightRemain > leftRemain) {
      // 右括号剩余比左括号多，才可以选择左括号
      dfs(leftRemain, rightRemain - 1, str + ")");
    }
  }
  dfs(n, n);
  return res;
};

console.log(generateParenthesis(1));
console.log(generateParenthesis(3));
