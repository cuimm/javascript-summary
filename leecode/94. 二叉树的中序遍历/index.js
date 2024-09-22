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
var inorderTraversal1 = function (root) {
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

var inorderTraversal = function (root) {
  const result = [];
  const stack = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    result.push(root.val);
    root = root.right;
  }

  return result;
};

/**
          1
      2       3
    4   5   6   7
 */

const root1 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
    right: {
      val: 5,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
    },
    right: {
      val: 7,
    },
  },
};

console.log("---递归+访问者模式---", inorderTraversal1(root1));
console.log("---递归---", inorderTraversal2(root1));
console.log("---迭代---", inorderTraversal(root1));
