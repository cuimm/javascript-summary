function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let head = null;
  let tail = null;
  let carry = 0;

  while (l1 || l2) {
    const val1 = (l1 && l1.val) ?? 0;
    const val2 = (l2 && l2.val) ?? 0;
    const sum = val1 + val2 + carry;

    if (!head) {
      head = new ListNode(sum % 10);
      tail = head;
    } else {
      const node = new ListNode(sum % 10);
      tail.next = node;
      tail = node;
    }

    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
    carry = Math.floor(sum / 10);
  }

  if (carry !== 0) {
    tail.next = new ListNode(carry);
  }

  return head;
};

/**
 * Definition for singly-linked list.
 */
function ListNode2(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers2 = function (l1, l2) {
  let carry = 0;
  let head;
  let tail;
  while (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    const sum = val1 + val2 + carry;

    if (!head) {
      head = new ListNode(sum % 10);
      tail = head;
    } else {
      const node = new ListNode(sum % 10);
      tail.next = node;
      tail = node;
    }

    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);

    carry = Math.floor(sum / 10);
  }
  if (carry !== 0) {
    tail.next = new ListNode(carry);
  }

  return head;
};

const l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
    },
  },
};

const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
    },
  },
};

console.log(addTwoNumbers(l1, l2));

const l21 = {
  val: 0,
};
const l22 = { val: 0 };
console.log(addTwoNumbers(l21, l22));

const l31 = {
  val: 9,
  next: {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: {
              val: 9,
            },
          },
        },
      },
    },
  },
};
const l32 = {
  val: 9,
  next: {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
      },
    },
  },
};
console.log(JSON.stringify(addTwoNumbers(l31, l32), null, 2));
