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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const list = [];

  function traverse(node, visitor = () => {}) {
    if (!node) return;
    visitor(node);
    traverse(node.left, visitor);
    traverse(node.right, visitor);
  }

  traverse(root, (node) => {
    list.push(node);
  });

  for (let i = 1; i < list.length; i++) {
    const prev = list[i - 1];
    const next = list[i];
    prev.left = null;
    prev.right = next;
  }

  console.log("===root===", JSON.stringify(root));
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 3 },
    right: { val: 4 },
  },
  right: {
    val: 5,
    right: { val: 6 },
  },
};
const root2 = {};
const root3 = { val: 0 };
flatten(root);
flatten(root2);
flatten(root3);
