/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let node = head;
  let length = 0;

  // 计算链表长度
  while (node) {
    node = node.next;
    length++;
  }

  // 找到倒数第n个位置
  node = dummy;
  while (n !== length) {
    node = node.next;
    length--;
  }

  node.next = node.next.next; // 改变链表节点指向
  return dummy.next;
};

// 双指针（左右指针）
var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0, head); // 哨兵指针
  let left = dummy;
  let right = head;
  // 右指针先往后移n步
  while (n--) {
    right = right.next;
  }
  // 左右指针同时右移，知道右指针指向null
  while (right) {
    left = left.next;
    right = right.next;
  }
  left.next = left.next.next; // 左指针的下一个节点就是倒数第 n 个节点
  return dummy.next;
};

const head = {
  val: 1,
  next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5 } } } },
};

console.log(JSON.stringify(removeNthFromEnd(head, 2)));
