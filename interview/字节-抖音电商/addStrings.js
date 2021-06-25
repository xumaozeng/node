/**
 * 字符串相加
 */

function addStrings(num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1,
    add = 0;
  const result = [];
  while (i >= 0 || j >= 0 || add !== 0) {
    const x = i >= 0 ? num1.charAt(i) - "0" : 0;
    const y = j >= 0 ? num2.charAt(j) - "0" : 0;
    const sum = x + y + add;
    result.unshift(sum % 10);
    add = Math.floor(sum / 10);
    i--;
    j--;
  }
  return result.join("");
}
