/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let index = -1;
  while (left <= right) {
    console.log(111, index, left, right);

    const middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      index = middle;
      break;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  console.log(index, left, right);
  return index > -1 ? index : left;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
