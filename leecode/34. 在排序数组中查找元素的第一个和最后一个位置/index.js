var lowerBound = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] >= target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return left;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const result = [];
  const left = lowerBound(nums, target);
  console.log("left=", left);

  if (left === nums.length || nums[left] !== target) {
    return [-1, -1];
  }
  const right = lowerBound(nums, target + 1) - 1; // 右边界通过找target+1来定位
  return [left, right];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1,-1]
console.log(searchRange([], 0)); // [-1,-1]
