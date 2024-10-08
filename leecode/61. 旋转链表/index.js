/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 闭合为环
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  let current = head;
  let length = 1;
  while (current.next) {
    length++;
    current = current.next;
  }
  // 到此，current为tail节点
  const mode = k % length;
  if (mode === 0) {
    return head;
  }

  let add = length - mode;
  current.next = head; // 尾节点next指向head【闭合为环】
  while (add) {
    current = current.next;
    add--;
  }

  const result = current.next; // 新表头
  current.next = null; // 切断闭合
  return result;
};

const head1 = {
  val: 1,
  next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5 } } } },
};

const head2 = {
  val: 0,
  next: { val: 1, next: { val: 2 } },
};
// console.log(rotateRight(head1, 2));
console.log(2222, rotateRight(head2, 4));
