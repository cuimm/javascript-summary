/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let result = 0;
  nums.sort((a, b) => a - b); // 对nums排序
  let minDiff = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        return sum;
      } else if (sum > target) {
        if (sum - target < minDiff) {
          minDiff = sum - target;
          result = sum;
        }
        right--;
      } else {
        if (target - sum < minDiff) {
          minDiff = target - sum;
          result = sum;
        }
        left++;
      }
    }
  }

  return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 0, 0], 1));
