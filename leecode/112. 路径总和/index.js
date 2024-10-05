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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let result = false;

  function traverse(node, sum = 0, path = []) {
    if (!node) return;

    sum = sum + node.val;
    path.push(node.val);
    if (node.left || node.right) {
      node.left && traverse(node.left, sum, path.slice());
      node.right && traverse(node.right, sum, path.slice());
    } else {
      if (sum === targetSum) {
        result = true;
      }
    }
  }

  traverse(root);
  return result;
};

var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) {
    return targetSum - root.val === 0;
  }
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

var hasPathSum = function (root, targetSum, sum = 0) {
  if (!root) {
    return false;
  }
  if (!root.left && !root.right) {
    return targetSum - root.val === sum;
  }
  return (
    hasPathSum(root.left, targetSum, sum + root.val) ||
    hasPathSum(root.right, targetSum, sum + root.val)
  );
};

const root = {
  val: 5,
  left: {
    val: 4,
    left: { val: 11, left: { val: 7 }, right: { val: 2 } },
  },
  right: {
    val: 8,
    left: { val: 13 },
    right: { val: 4, right: { val: 1 } },
  },
};

const root2 = {
  val: 1,
  left: { val: 2 },
  right: { val: 3 },
};

console.log(hasPathSum(root, 22));
console.log(hasPathSum(root2, 5));
