/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
};

const twoSum2 = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (map[target - current] !== undefined) {
      return [map[target - current], i];
    } else {
      map[current] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
