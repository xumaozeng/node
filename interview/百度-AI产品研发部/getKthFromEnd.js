/**
 * 链表中倒数第k个节点
 */

function getKthFromEnd(head, k) {
  let fast = head,
    slow = head;
  while (k--) {
    fast = fast.next;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
}
