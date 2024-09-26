/**
 * 回溯
 *
 * 原问题：构造长度为n的字符串
 * 经过：枚举一个字母后
 * 子问题：构造长度为n-1的字符串
 *
 * 子问题和原问题是相似的，这种从原问题到子问题的过程，适合用“递归”解决。
 *
 * 回溯有一个增量构造答案的问题，这个过程通常用“递归”实现。
 *
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const mapping = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const n = digits.length;
  if (n === 0) {
    return [];
  }

  const ans = [];

  // 深度优先算法
  function dfs(i, path = []) {
    if (i === n) {
      ans.push(path.join(""));
      return;
    }
    const currentLevelLetters = mapping[digits[i]];
    for (let index = 0; index < currentLevelLetters.length; index++) {
      dfs(i + 1, path.concat(currentLevelLetters[index]));
    }
  }

  dfs(0);
  return ans;
};

var letterCombinations2 = function (digits) {
  const mapping = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const n = digits.length;
  if (n === 0) {
    return [];
  }
  const ans = [];

  const path = new Array(n).fill("");

  // 深度优先
  function dfs(i) {
    if (i === n) {
      ans.push(path.join(""));
      return;
    }
    for (let index = 0; index < mapping[digits[i]].length; index++) {
      path[i] = mapping[digits[i]][index];
      dfs(i + 1);
    }
  }

  dfs(0);

  return ans;
};

var letterCombinations3 = function (digits) {
  const mapping = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  if (!digits) return [];

  const letters = digits.split(""); // ['2', '3', '4']
  const chars = letters.map((letter) => mapping[letter]);
  return chars.reduce((memo, next) => {
    const flatter = [];
    for (let i = 0; i < memo.length; i++) {
      for (let j = 0; j < next.length; j++) {
        flatter.push(`${memo[i]}${next[j]}`);
      }
    }
    return flatter;
  });
};

console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// console.log(letterCombinations("")); // []
// console.log(letterCombinations("2")); // ["a","b","c"]
// console.log(letterCombinations("234"));
