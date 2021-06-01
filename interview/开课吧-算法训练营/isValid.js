/**
 * 有效的括号
 */

function isValid(s) {
  const stack = [];
  const obj = { "(": ")", "[": "]", "{": "}" };
  for (let i = 0; i < s.length; i++) {
    const ele = s[i];
    if (ele in obj) {
      stack.push(ele);
    } else {
      if (ele !== obj[stack.pop()]) return false;
    }
  }
  return !stack.length;
}

// test
console.log(isValid("()[]{}"));
console.log(isValid("()["));
