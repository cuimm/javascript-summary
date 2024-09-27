function isPalindrome(str) {
  let result = true;
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      result = false;
      break;
    }
    left++;
    right--;
  }
  return result;
}

/**
 * 【递归 + 回溯】输入视角
 * 假设每对相邻字符之间有个逗号，那么就看每个逗号是选还是不选。
 *
 * @param {string} s
 * @return {string[][]}
 */
var partition2 = function (s) {
  const result = [];
  const n = s.length;

  function traverse(i, start, path = []) {
    if (i === n) {
      result.push(path.slice());
      return;
    }
    if (i + 1 < n) {
      traverse(i + 1, start, path); // 不选择 i 和 i+1 之间的逗号
    }
    if (isPalindrome(s.slice(start, i + 1))) {
      traverse(i + 1, i + 1, path.concat(s.slice(start, i + 1))); // 选择 i和i+1 之间的逗号
    }
  }

  traverse(0, 0);

  return result;
};

/**
 * 【递归】答案视角（枚举字符串结束位置）
 * @param {*} s
 */
var partition = function (s) {
  const result = [];
  const n = s.length;

  function traverse(i, path = []) {
    if (i === n) {
      result.push(path);
      return;
    }
    for (let j = i; j < n; j++) {
      const str = s.slice(i, j + 1);
      traverse(j + 1, path.concat(str));
    }
  }
  traverse(0);

  return result;
};

console.log(partition("aab"));
console.log(partition("a"));
