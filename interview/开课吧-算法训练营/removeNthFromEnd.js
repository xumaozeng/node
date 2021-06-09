/**
 * 删除链表中倒数第K个节点
 */

function removeNthFromEnd(head, n) {
  let fast = head;
  let slow = head;
  // 找到第n-1个节点
  while (--n) {
    fast = fast.next;
  }
  // 如果删除的是头结点，则返回head.next
  if (!fast.next) return head.next;
  // 不是则找到第n个节点改变指向
  fast = fast.next;
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
}
