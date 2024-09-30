/**
    思路:
        - 如何变大：从低位挑一个大一点的数，交换前面一个小一点的数。
        - 变大的幅度要尽量小。
    1). 像 [3,2,1] 这样递减的，没有下一个排列，已经稳定了，没法变大。
    2). 像 [1,5,2,4,3,2] 这种，怎么稍微变大？
        1. 从右往左，寻找第一个比右邻居小的数，把它换到后面去
            “第一个”意味着尽量是低位，“比右邻居小”意味着它是从右往左的第一个波谷。（这个数后面全部为降序）
            比如，1 5 (2) 4 3 2，中间这个 2
        2. 接着还是从右往左，寻找第一个比这个2大的数。
            15 (2) 4 (3) 2，交换后：15 (3) 4 (2) 2
        3. 还没结束！变大的幅度可以再小一点，仟位微变大了，后三位可以再小一点。
            后三位肯定是递减的，翻转，变成[1,5,3,2,2,4]，即为所求。
 * 1. 从右向左，找到第一个比右邻居小的数，把它换到后面去（152432 => 15(2)432）
 * 2. 从右向左，寻找第一个比这个2大的数
 * 2. 最后对后面的数降序排序
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const len = nums.length;
  let i = len - 2;

  // 从右向左，寻找第一个比右邻居小的数a，把它换到后面去
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  // 从右向左，找到第一个比数a大的数b，交换
  if (i > -1) {
    let right = len - 1;
    while (right > i && nums[right] <= nums[i]) {
      right--;
    }
    [nums[right], nums[i]] = [nums[i], nums[right]];
  }

  // 数b后面的升序排序
  let left = i + 1;
  let right = len - 1;
  while (left < right) {
    [nums[right], nums[left]] = [nums[left], nums[right]];
    left++;
    right--;
  }
  return nums;
};

// console.log(nextPermutation([1, 5, 2, 4, 3, 2])); // [ 1, 5, 3, 2, 2, 4 ]
// console.log(nextPermutation([1, 2, 3])); // [ 1, 3, 2 ]
// console.log(nextPermutation([3, 2, 1])); // [1, 2, 3]
// console.log(nextPermutation([1, 1, 5])); // [ 1, 5, 1 ]
// console.log(nextPermutation([1, 3, 2])); // [ 2, 1, 3 ]
console.log(nextPermutation([5, 1, 1])); // [1, 1, 5]
