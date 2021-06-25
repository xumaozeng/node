/**
 * 删除链表的倒数第N个节点
 */

function removeNthFromEnd(head, n) {
  let first = head,
    second = head;
  while (--n) {
    first = first.next;
  }
  if (!first.next) return head.next;
  first = first.next;
  while (first.next) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return head;
}
