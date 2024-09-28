/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  const node1 = head;
  const node2 = node1.next;
  const node3 = node2.next;
  node2.next = node1; // 表头
  node1.next = swapPairs(node3); // 原表头指向递归返回后的新的链表
  return node2;
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
      },
    },
  },
};

console.log(JSON.stringify(swapPairs(head)));
