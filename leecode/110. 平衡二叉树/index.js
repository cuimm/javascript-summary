/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  function height(node) {
    if (!node) return 0;

    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1;
    } else {
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
};

const root = {
  val: 3,
  left: { val: 9 },
  right: { val: 20, left: { val: 15 }, right: { val: 7 } },
};
const root2 = {
  val: 1,
  left: {
    val: 2,
    left: { val: 3, left: { val: 4 }, right: { val: 4 } },
    right: { val: 3 },
  },
  right: { val: 2 },
};

console.log(isBalanced(root)); // true
console.log(isBalanced(root2)); // false
console.log(isBalanced(null)); // true
