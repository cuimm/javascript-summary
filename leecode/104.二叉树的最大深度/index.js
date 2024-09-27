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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  const leftDeepth = maxDepth(root.left);
  const righDeepth = maxDepth(root.right);
  return Math.max(leftDeepth, righDeepth) + 1;
};

/**
 * 至上向下
 */
var maxDepth = function (root) {
  let result = 0;

  function dfs(node, deepth = 0) {
    if (!node) {
      return;
    }
    deepth++;
    result = Math.max(result, deepth);
    dfs(node.left, deepth);
    dfs(node.right, deepth);
  }

  dfs(root);

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

console.log(maxDepth(root));
