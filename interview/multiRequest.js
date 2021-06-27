/**
 * 实现一个批量请求函数multiRequest(urls, maxNum)
 * 要求如下：
 * 1.要求最大并发数maxNum
 * 2.每当有一个请求返回，就留下一个空位，可以增加新的请求
 * 3.所有请求完成后，结果按照urls里面的顺序依次打出
 * 请求函数可以用fetch模拟
 */

function multiRequest(urls, maxNum) {
  // 确定给定的maxNum是否小于urls数组的长度
  const min = Math.min(urls.length, maxNum);
  return new Promise(resolve => {
    let index = 0,
      start = 0,
      finish = 0;
    const result = [];
    const run = function () {
      if (finish === urls.length) resolve(result);
      while (start < min && index < urls.length) {
        start++;
        fetch(urls[index]).then(value => {
          start--;
          finish++;
          result[index++] = value;
          run();
        });
      }
    };

    run();
  });
}
