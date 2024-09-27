/**
 * 递归 + 回溯 + 数学归纳法
 * 递归：将问题拆解，原问题和子问题相似，适合用【递归】实现
 * 回溯：增量构造答案的过程，通过递归找到所有可能的解（全量搜索）
 * 剩下的交给数学归纳发
 *
 * 【递归回溯案例】：排列组合、迷宫问题、0-1背包问题
 */
function flatter(target) {
  const result = [];
  const level = target.length;

  function traverse(i, path = []) {
    if (i === level) {
      result.push(path.join(""));
      return;
    }
    for (let index = 0; index < target[i].length; index++) {
      traverse(i + 1, path.concat(target[i][index]));
    }
  }

  traverse(0);

  return result;
}

/**
 * 暴力实现
 */
function flatter2(target) {
  return target.reduce((memo, next) => {
    const result = [];
    for (let i = 0; i < memo.length; i++) {
      for (let j = 0; j < next.length; j++) {
        result.push(`${memo[i]}${next[j]}`);
      }
    }
    return result;
  });
}

const target = [
  ["a", "b"],
  ["n", "m"],
  ["0", "1"],
];
console.log(flatter(target));
