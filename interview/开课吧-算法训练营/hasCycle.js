/**
 * 判定链表是否有环
 */

function hasCycle1(head) {
  const set = new Set();
  while (head) {
    if (set.has(head)) return true;
    set.add(head);
    head = head.next;
  }
  return false;
}

function hasCycle2(head) {
  let fast = head,
    slow = head;
  while (fast & fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) return true;
  }

  return false;
}
