/**
 * 压缩字符串
 */

function compress(chars) {
  let ch = chars[0];
  let size = chars.length;
  let j = 0;
  while (size) {
    if (ch !== chars[0]) {
      chars.push(ch);
      if (j > 1) chars.push(...(j + ""));
      j = 0;
      ch = chars[0];
    }
    chars.shift();
    j++;
    size--;
  }
  // 加上最后的字符
  chars.push(ch);
  if (j > 1) chars.push(...(j + ""));
  return chars.length;
}
