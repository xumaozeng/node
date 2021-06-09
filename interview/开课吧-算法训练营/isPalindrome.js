/**
 * 回文链表
 */

function isPalindrome(head) {
  // 用数组保存val值
  const arrs = [];
  while (head) {
    arrs.push(head.val);
    head = head.next;
  }
  for (let l = 0, r = arrs.length - 1; l < r; l++, r--) {
    if (arrs[l] !== arrs[r]) return false;
  }
  return true;
}
