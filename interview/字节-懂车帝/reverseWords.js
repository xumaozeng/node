/**
 * 翻转字符串里的单词
 */

function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(" ");
}
