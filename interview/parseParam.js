/**
 * 字符串题目：解析URL params为对象
 * 结果
 * {
 *  user: 'anonymous',
 *  id: [123, 456],
 *  city: '北京' // 需要中文解码
 *  enabled: true // 未指定的key约定为true
 * }
 */

function parseParam(url) {
  const paramStr = url.match(/.*\?(.*)$/)[1]; // 将？后面字符取出来
  const paraArr = paramStr.split("&"); // 将字符串以&号分割存到数组
  const paramObj = {};
  paraArr.forEach(param => {
    if (param.includes("=")) {
      // 处理有value的参数
      let [key, value] = param.split("=");
      value = decodeURIComponent(value); // 解码
      value = /^\d+$/.test(value) ? parseFloat(value) : value; // 判断是否转为数字
      if (paramObj.hasOwnProperty(key)) {
        paramObj[key] = [].concat(paramObj[key], value);
      } else {
        paramObj[key] = value;
      }
    } else {
      // 处理没有value的值
      paramObj[param] = true;
    }
  });
  return paramObj;
}

// test
const url =
  "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled";

const result = parseParam(url);
console.log(result);
