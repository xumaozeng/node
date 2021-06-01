/**
 * 裴波那契数
 */

function fib(n) {
  const cache = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      cache[i] = i;
    } else {
      cache[i] = cache[i - 1] + cache[i - 2];
    }
  }
  return cache[n];
}

// test
console.log(fib(2));
