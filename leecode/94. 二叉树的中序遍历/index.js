/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * 递归+访问者模式
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const traverse = (node, visitor) => {
    if (!node) return;
    traverse(node.left, visitor);
    visitor(node);
    traverse(node.right, visitor);
  };

  const result = [];
  traverse(root, (node) => result.push(node.val));
  return result;
};

/**
 * 递归
 * @param {*} root
 * @returns
 */
var inorderTraversal2 = function (root) {
  const result = [];
  const traverse = (node) => {
    if (!node) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  };
  traverse(root);
  return result;
};

const root1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
    },
  },
};

console.log(inorderTraversal(root1));
console.log(inorderTraversal2(root1));
