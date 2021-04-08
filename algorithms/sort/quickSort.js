/**
 * 快速排序，寻找第K大的数
 * eg: [1, 3, 5, 2, 2] , 5, 3
 * lg: 2
 */

// a-数组 n-长度 K-第K大
function findKth(a, n, K) {
  return quickSort(a, 0, n - 1, K);
}

function quickSort(a, left, right, k) {
  // 起始元素值为比较值
  const pivot = a[left];
  let i = left;
  let j = right;
  while (i < j) {
    // 寻找右边比target小的值
    while (i < j && a[j] >= pivot) j--;
    a[i] = a[j];
    // 寻找左边比target大的值
    while (i < j && a[i] < pivot) i++;
    a[j] = a[i];
  }

  a[i] = pivot;
  // 第一轮排序已完成，查找第K大的元素
  const dk = k - right + i - 1;
  if (dk === 0) return pivot;
  // 在左半部分查找
  else if (dk > 0) return quickSort(a, left, i - 1, dk);
  else return quickSort(a, i + 1, right, k); // 在右半部分查找
}

const arr = [1, 3, 5, 2, 2];
console.log(findKth(arr, 5, 3));
