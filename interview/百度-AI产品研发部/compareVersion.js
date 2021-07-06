/**
 * 比较版本号
 */

function compareVersion(version1, version2) {
  const v1 = version1.split(".");
  const v2 = version2.split(".");

  const size = Math.max(v1.length, v2.length);
  for (let i = 0; i < size; i++) {
    const num1 = v1[i] === undefined ? 0 : parseInt(v1[i]);
    const num2 = v2[i] === undefined ? 0 : parseInt(v2[i]);
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
}
