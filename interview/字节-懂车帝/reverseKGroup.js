/**
 * K个一组翻转链表
 */

function reverseKGroup(head, k) {
  const reverse = function (node) {
    if (!node) return null;
    let curr_node = node;
    let index = 0;
    // 找到第k个节点
    while (curr_node && index !== k) {
      curr_node = curr_node.next;
      index++;
    }
    // 翻转节点
    if (index === k) {
      curr_node = reverse(curr_node);
      while (index > 0) {
        let next_node = node.next;
        node.next = curr_node;
        curr_node = node;
        node = next_node;
        index--;
      }
      node = curr_node;
    }
    return node;
  };

  return reverse(head);
}
