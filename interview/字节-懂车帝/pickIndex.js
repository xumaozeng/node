/**
 * 按权重随机选择
 */

function Solution(w) {
  this.w = w;
  this.total = 0;
  for (const v of w) {
    this.total += v;
  }
}

Solution.prototype.pickIndex = function () {
  const randomProb = Math.random();
  let currentProb = 0;
  for (let i = 0; i < this.w.length; i++) {
    const prob = currentProb + this.w[i] / this.total;
    if (randomProb >= currentProb && randomProb < prob) {
      return i;
    }
    currentProb = prob;
  }
};
