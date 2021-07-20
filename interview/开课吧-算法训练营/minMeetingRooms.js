/**
 * 会议室II
 */

function minMeetingRooms(intervals) {
  const size = intervals.length;
  if (size === 0) return 0;
  intervals.sort((a, b) => a[0] - b[0]);
  const stack = [];
  for (let i = 0; i < size; i++) {
    if (stack.length && stack[stack.length - 1] <= intervals[i][0]) {
      stack.pop();
    }
    stack.push(intervals[i][1]);
  }
  return stack.length;
}

// test
const arr1 = [
  [0, 30],
  [5, 10],
  [15, 20]
];
const arr2 = [
  [7, 10],
  [2, 4]
];

console.log(minMeetingRooms(arr1));
console.log(minMeetingRooms(arr2));
