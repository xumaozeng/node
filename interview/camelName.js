/**
 * 驼峰命名
 */

function camelName(str) {
  return str.replace(/-\w/g, x => x.slice(1).toUpperCase());
}

// test
const s = "get-element-by-id"; // 转化为getElementById

const res = camelName(s);
console.log(res);
