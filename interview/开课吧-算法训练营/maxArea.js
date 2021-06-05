/**
 * 盛最多水的容器
 */
function maxArea(height) {
  // 双指针
  if (!height.length) return 0;
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    const area = Math.abs(right - left) * Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}
