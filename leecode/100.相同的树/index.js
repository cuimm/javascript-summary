/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p || !q) {
    return p === q;
  }
  if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  return false;
};

const root = {
  val: 1,
  left: { val: 2 },
  right: { val: 3 },
};
const _root = {
  val: 1,
  left: { val: 2 },
  right: { val: 3 },
};

const root2 = {
  val: 1,
  left: { val: 2 },
};
const _root2 = {
  val: 1,
  right: { val: 2 },
};

const root3 = {
  val: 1,
  left: { val: 2 },
  right: { val: 1 },
};
const _root3 = {
  val: 1,
  left: { val: 1 },
  right: { val: 2 },
};
console.log(isSameTree(root, _root));
console.log(isSameTree(root2, _root2));
console.log(isSameTree(root3, _root3));
