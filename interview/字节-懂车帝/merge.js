/**
 * 合并区间
 */

function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i + 1] === undefined) break;
    if (
      intervals[i][0] <= intervals[i + 1][0] &&
      intervals[i][1] >= intervals[i + 1][0]
    ) {
      intervals.splice(i, 2, [
        intervals[i][0],
        intervals[i][1] > intervals[i + 1][1]
          ? intervals[i][1]
          : intervals[i + 1][1]
      ]);
      i--;
    }
  }

  return intervals;
}

// test
const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
];
console.log(merge(intervals));
