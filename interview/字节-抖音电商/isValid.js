/**
 * 有效的括号
 */

function isValid(s) {
  const obj = { "(": ")", "[": "]", "{": "}" };
  const stack = [];
  for (const ch of s) {
    if (ch in obj) {
      stack.push(ch);
    } else {
      if (ch !== obj[stack.pop()]) return false;
    }
  }
  return !stack.length;
}
