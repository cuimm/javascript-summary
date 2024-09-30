/**
 * 数组某个下标的左侧和右侧都是升序的
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const result = 0;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      return middle;
    }
    if (nums[middle] < nums[right]) {
      // 右边是绝对升序的
      if (target > nums[middle] && target <= nums[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    } else {
      // 左边是绝对升序的
      if (target >= nums[left] && target < nums[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([1], 0)); // -1
