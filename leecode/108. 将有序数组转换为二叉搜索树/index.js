/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * 从数组正中将数组一分为二，左边数组为左子树，中间为根节点，右边为右子树。
 * 然后将左右子树转换为二叉搜索树，分别为原问题的子问题（递归）
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums || !nums.length) return;
  const mid = Math.floor(nums.length / 2);
  const root = nums[mid];
  const left = sortedArrayToBST(nums.slice(0, mid));
  const right = sortedArrayToBST(nums.slice(mid + 1));
  return new TreeNode(root, left, right);
};

const nums = [-10, -3, 0, 5, 9];
console.log(sortedArrayToBST(nums));
/**
{
  val: 0,
  left: TreeNode {
    val: -3,
    left: TreeNode { val: -10, left: null, right: null },
    right: null
  },
  right: TreeNode {
    val: 9,
    left: TreeNode { val: 5, left: null, right: null },
    right: null
  }
}
 */
