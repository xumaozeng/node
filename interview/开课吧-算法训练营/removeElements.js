/**
 * 移除链表元素
 */

function removeElements(head, val) {
  // 哨兵=>1=>2=>6
  const pre = {
    next: head
  };
  let cur = pre;
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return pre.next;
}
