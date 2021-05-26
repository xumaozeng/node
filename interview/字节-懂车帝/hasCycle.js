/**
 * 判断链表是否有环
 */

function hasCycle(head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    // 代表有环
    if (slow === fast) return true;
  }

  return false;
}
