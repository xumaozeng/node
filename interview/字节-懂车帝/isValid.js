/**
 * 有效的括号
 */

function isValid(s) {
  // 位运算&1等于%2判断奇偶
  if (s.length & 1) return false;
  const stack = [];
  const obj = { "(": ")", "[": "]", "{": "}" };
  for (const ch of s) {
    if (ch in obj) {
      stack.push(ch);
    } else {
      if (ch !== obj[stack.pop()]) return false;
    }
  }
  return !stack.length;
}

//test
const s = "[]()";
console.log(isValid(s));
