/**
 * 最长公共前缀
 */

function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  let curIndex = 0;
  while (strs[0].charAt(curIndex)) {
    const matchAll = strs.reduce((pre, cur) => {
      return pre && cur.charAt(curIndex) === strs[0].charAt(curIndex);
    }, true);
    if (matchAll) curIndex++;
    else break;
  }
  return strs[0].slice(0, curIndex);
}
