/**
 * 括号生成
 */

function generateParenthesis(n) {
  const result = [];
  const generate = (str, left, right) => {
    if (str.length === 2 * n) {
      result.push(str);
      return;
    }
    if (left > 0) generate(str + "(", left - 1, right);
    if (right > left) generate(str + ")", left, right - 1);
  };
  generate("", n, n);
  return result;
}
