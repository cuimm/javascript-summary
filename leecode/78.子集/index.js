/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets2 = function (nums) {
  const n = nums.length;
  const ans = [];
  let path = [];

  function dfs(i) {
    // 边界条件
    if (i === n) {
      ans.push(path.slice()); // path为引用类型，防止后期变化引起结果集出错
      return;
    }

    // 递归子问题i+1：不选择当前字母
    dfs(i + 1);

    // 递归子问题i+1：选择当前字母
    path.push(nums[i]);
    dfs(i + 1);
    path.pop();
  }

  dfs(0);
  return ans;
};

var subsets = function (nums) {
  const n = nums.length;
  const ans = [];

  // 回溯：深度优先算法
  function dfs(i, path = []) {
    if (i === n) {
      ans.push(path.slice());
      return;
    }
    dfs(i + 1, path); // 子问题：不选择当前数字
    dfs(i + 1, path.concat(nums[i])); // 子问题：选择当前数字
  }

  dfs(0);

  return ans;
};

console.log(subsets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// console.log(subsets([0])); // [[],[0]]
