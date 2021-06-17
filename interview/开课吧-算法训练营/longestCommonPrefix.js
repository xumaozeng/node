/**
 * 最长公共前缀
 */

function longestCommonPrefix(strs) {
  let currIndex = 0;
  while (strs[0].charAt(currIndex)) {
    const ch = strs[0].charAt(currIndex);
    const matchAll = strs.reduce((pre, cur) => {
      return pre && cur.charAt(currIndex) === ch;
    }, true);

    if (matchAll) currIndex++;
    else break;
  }
  return strs[0].slice(0, currIndex);
}
