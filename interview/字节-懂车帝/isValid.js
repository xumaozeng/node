/**
 * 有效的括号
 */

function isValid(s) {
  const n = s.length;
  // 奇数返回false
  if (n % 2 === 1) return false;
  const map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"]
  ]);
  const stack = [];
  for (let ch of s) {
    if (map.has(ch)) {
      if (!stack.length || stack[stack.length - 1] !== map.get(ch)) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return !stack.length;
}
