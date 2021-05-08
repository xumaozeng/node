/**
 * 反转链表
 */

function reverseList(head) {
  if (!head) return null;
  let pre_node = null;
  let curr_node = head;

  while (curr_node) {
    let next_node = curr_node.next;
    // 翻转
    curr_node.next = pre_node;
    // pre和cur往后移一位
    pre_node = curr_node;
    curr_node = next_node;
  }

  return pre_node;
}
