/**
 * 判断链表是否有环
 */

function hasCycle(head) {
  // 第一种方法空间复杂度O(n)
  const set = new Set();
  while (head) {
    if (set.has(head)) return true;
    else set.add(head);
    head = head.next;
  }
  return false;

  /* // 第二种方法空间复杂度O(1)
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    // 代表有环
    if (slow === fast) return true;
  }

  return false; */
}
