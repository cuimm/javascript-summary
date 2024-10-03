/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const n = postorder.length;
  if (n === 0) {
    return null;
  }
  const root = postorder[n - 1];
  const leftLength = inorder.indexOf(root);
  const in1 = inorder.slice(0, leftLength);
  const in2 = inorder.slice(leftLength + 1);
  const post1 = postorder.slice(0, leftLength);
  const post2 = postorder.slice(leftLength, n - 1);
  const left = buildTree(in1, post1);
  const right = buildTree(in2, post2);
  return new TreeNode(root, left, right);
};

const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];
console.log(buildTree(inorder, postorder));
