/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  console.log(preorder, inorder);

  const n = preorder.length;
  if (n === 0) {
    return null;
  }
  const root = preorder[0]; // 根节点
  const leftSize = inorder.indexOf(root); // 左子树大小
  const pre1 = preorder.slice(1, leftSize + 1); // 前序-左子树
  const pre2 = preorder.slice(leftSize + 1); // 前序-右子树
  const in1 = inorder.slice(0, leftSize); // 中序-左子树
  const in2 = inorder.slice(leftSize + 1); // 中序-右子树

  const left = buildTree(pre1, in1);
  const right = buildTree(pre2, in2);
  return new TreeNode(root, left, right);
};

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
console.log(buildTree(preorder, inorder));

const preorder2 = [3, 9, 8, 6, 20, 15, 7];
const inorder2 = [8, 9, 6, 3, 15, 20, 7];
console.log(buildTree(preorder2, inorder2));
