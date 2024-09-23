function flatter(target) {
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
