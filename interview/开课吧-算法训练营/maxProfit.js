/**
 * 买卖股票的最大时机
 */

function maxProfit(prices) {
  let minValue = Number.MAX_VALUE;
  let maxProfit = 0;
  for (const price of prices) {
    if (price < minValue) {
      minValue = price;
    } else {
      maxProfit = Math.max(price - minValue, maxProfit);
    }
  }
  return maxProfit;
}
