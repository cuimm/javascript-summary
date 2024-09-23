/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const result = [];
  const stack = [root];

  while (stack.length) {
    const currentLevelLength = stack.length;
    result.push([]);
    for (let i = 0; i < currentLevelLength; i++) {
      const currentNode = stack.shift();
      result[result.length - 1].push(currentNode.val);
      currentNode.left && stack.push(currentNode.left);
      currentNode.right && stack.push(currentNode.right);
    }
  }

  return result;
};

const root = {
  val: 3,
  left: {
    val: 9,
  },
  right: {
    val: 20,
    left: {
      val: 15,
    },
    right: {
      val: 7,
    },
  },
};

console.log(levelOrder(root)); // [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]
