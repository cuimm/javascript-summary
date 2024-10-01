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
var isSymmetric = function (root) {
  function isSameTree(p, q) {
    if (!p || !q) {
      return p === q;
    }
    return (
      p.val === q.val &&
      isSameTree(p.left, q.right) &&
      isSameTree(p.right, q.left)
    );
  }
  return isSameTree(root.left, root.right);
};

const root = {
  val: 1,
  left: { val: 2, right: { val: 3 } },
  right: { val: 2, right: { val: 3 } },
};

/*
       1
     /   \
    2     2
   / \   / \
  3  4  4   3
*/
const root2 = {
  val: 1,
  left: { val: 2, left: { val: 3 }, right: { val: 4 } },
  right: { val: 2, left: { val: 4 }, right: { val: 3 } },
};
console.log(isSymmetric(root));
console.log(isSymmetric(root2));
