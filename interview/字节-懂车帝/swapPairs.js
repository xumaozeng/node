/**
 * 两两交换链表中的节点
 */

function swapPairs(head) {
  if (!head || !head.next) return head;
  const newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;
  return newHead;
}
