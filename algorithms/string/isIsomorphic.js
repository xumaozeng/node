/**
 * 判断字符串是否同构
 * 字符串A中的字符必须与字符串B的每个字符一一对应
 * - paper和title返回true
 * - egg和sad返回false
 * - dgg和add返回true
 */

function isIsomorphic(firstString, secondString) {
  // 检查长度是否相等，如果不想等，不可能是同构的
  if (firstString.length !== secondString.length) return false;

  const letterMap = {};

  for (let i = 0; i < firstString.length; i++) {
    const letterA = firstString[i];
    const letterB = secondString[i];

    // 如果letterA不存在，创建一个map，将letterB赋值给它
    if (letterMap[letterA] === undefined) {
      letterMap[letterA] = letterB;
    } else if (letterMap[letterA] !== letterB) {
      // 如果letterA在map中已存在但不是与letterB对应
      // 那么意味着letterA与多个字符相对应
      return false;
    }
  }
  // 迭代完毕，如果满足条件，那么返回true
  // 是同构的
  return true;
}

// test
console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("kick", "side"));
