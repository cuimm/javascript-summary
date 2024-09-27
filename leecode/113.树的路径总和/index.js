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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const result = [];

  function traverse(node, sum = 0, path = []) {
    if (!node) return;
    sum += node.val;
    path.push(node.val);
    if (node.left || node.right) {
      // 保证遍历到的不是根节点
      traverse(node.left, sum, path.slice());
      traverse(node.right, sum, path.slice());
    } else {
      if (sum === targetSum) {
        result.push(path);
      }
    }
  }

  traverse(root);
  return result;
};

const root = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7,
      },
      right: {
        val: 2,
      },
    },
  },
  right: {
    val: 8,
    left: {
      val: 13,
    },
    right: {
      val: 4,
      left: {
        val: 5,
      },
      right: {
        val: 1,
      },
    },
  },
};

const root2 = {
  val: 1,
  left: {
    val: 2,
  },
};
console.log(pathSum(root, 22));
console.log(pathSum(root2, 0));
console.log(pathSum(root2, 1));
