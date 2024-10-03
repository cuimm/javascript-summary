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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return [];
  const result = [];
  const stack = [root];
  while (stack.length) {
    const len = stack.length;
    result.push([]);
    for (let i = 0; i < len; i++) {
      const node = stack.shift();
      result[result.length - 1].push(node.val);
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
  }

  return result.reverse();
};

const root = {
  val: 3,
  left: { val: 9 },
  right: { val: 20, left: { val: 15 }, right: { val: 7 } },
};
console.log(levelOrderBottom(root));
