/**
 * 两个链表的第一个公共节点
 */

function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;
  let nodeA = headA;
  let nodeB = headB;
  while (nodeA !== nodeB) {
    nodeA = nodeA ? nodeA.next : headB;
    nodeB = nodeB ? nodeB.next : headA;
  }
  return nodeA;
}
