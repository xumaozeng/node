/**
 * 环形链表II：
 * 给定一个链表，返回链表开始入环的第一个节点
 */

function detectCycle1(head) {
  const set = new Set();
  while (head) {
    if (set.has(head)) return head;
    set.add(head);
    head = head.next;
  }
  return null;
}

function detectCycle2(head) {
  let fast = head,
    slow = head,
    start = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      while (start !== slow) {
        start = start.next;
        slow = slow.next;
      }
      return start;
    }
  }
  return null;
}
