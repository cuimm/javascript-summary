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
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const stack = [root];
  let isOrderleft = true;

  while (stack.length) {
    const currentLevelLength = stack.length;
    result.push([]);
    for (let i = 0; i < currentLevelLength; i++) {
      const node = stack.shift();
      if (isOrderleft) {
        result[result.length - 1].push(node.val);
      } else {
        result[result.length - 1].unshift(node.val);
      }
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
    isOrderleft = !isOrderleft;
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

console.log(zigzagLevelOrder(root));
console.log(zigzagLevelOrder(null));
