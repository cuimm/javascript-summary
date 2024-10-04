/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var sortedListToArray = function (head) {
  const array = [];

  while (head) {
    const val = head.val;
    array.push(val);
    head = head.next;
  }

  return array;
};

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  const nums = sortedListToArray(head);

  var sortedArrayToBST = function (nums) {
    if (!nums || !nums.length) return null;
    const mid = Math.floor(nums.length / 2);
    const root = nums[mid];
    const left = sortedArrayToBST(nums.slice(0, mid));
    const right = sortedArrayToBST(nums.slice(mid + 1));

    return new TreeNode(root, left, right);
  };

  return sortedArrayToBST(nums);
};

const list = {
  val: -10,
  next: {
    val: -3,
    next: { val: 0, next: { val: 5, next: { val: 9, next: null } } },
  },
};
console.log(sortedListToBST(list));
/*
{
  val: 0,
  left: TreeNode {
    val: -3,
    left: TreeNode { val: -10, left: [], right: [] },
    right: []
  },
  right: TreeNode {
    val: 9,
    left: TreeNode { val: 5, left: [], right: [] },
    right: []
  }
}
*/
console.log(sortedListToBST(null)); // []
