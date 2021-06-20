/**
 * 实现千位分隔符
 */

function parseToMoney(num) {
  num = parseFloat(num.toFixed(3));
  let [integer, decimal] = String.prototype.split.call(num, ".");
  integer = integer.replace(/\d(?=(\d{3})+$)/g, "$&,");
  return integer + "." + (decimal ? decimal : "");
}

// 保留三位小数
const res1 = parseToMoney(12345.6789);
console.log(res1);
