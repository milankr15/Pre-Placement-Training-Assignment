/////// SOLUTIONS OF THE ASSIGNMENT QUESTIONS--18 ///////

//// Question--1 ////

function mergeIntervals(intervals) {
    if (intervals.length <= 1) {
      return intervals;
    }
  
    intervals.sort((a, b) => a[0] - b[0]);
  
    const merged = [intervals[0]];
  
    for (let i = 1; i < intervals.length; i++) {
      const currentInterval = intervals[i];
      const lastMergedInterval = merged[merged.length - 1];
  
      if (currentInterval[0] <= lastMergedInterval[1]) {
        // Overlapping intervals, update the end time of the last merged interval
        lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
      } else {
        // Non-overlapping interval, add it to the merged array
        merged.push(currentInterval);
      }
    }
  
    return merged;
  }
  
  // Test case
  const intervals1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
  console.log(mergeIntervals(intervals1)); // Output: [[1,6],[8,10],[15,18]]
  
  const intervals2 = [[1, 4], [4, 5]];
  console.log(mergeIntervals(intervals2)); // Output: [[1,5]]


//// Question--2 ////

function colorsSort(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
  
    while (mid <= high) {
      if (nums[mid] === 0) {
        swap(nums, low, mid);
        low++;
        mid++;
      } else if (nums[mid] === 1) {
        mid++;
      } else if (nums[mid] === 2) {
        swap(nums, mid, high);
        high--;
      }
    }
  }
  
  function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  
  // Test case
  const nums = [2, 0, 1];
  colorsSort(nums);
  console.log(nums); // Output: [ 0, 1, 2 ]
  
  // Test case
  const nums = [2, 0, 2, 1, 1, 0];
  colorsSort(nums);
  console.log(nums); // Output: [0, 0, 1, 1, 2, 2]


//// Question--3 ////

function firstBadVersion(n) {
    let left = 1;
    let right = n;
  
    while (left < right) {
      const mid = Math.floor(left + (right - left) / 2);
  
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
  
    return left;
  }
  
  // Example usage:
  const n = 5;
  const bad = 4;
  
  console.log(firstBadVersion(n)); // Output: 4


//// Question--4 ////

function maximumGap(nums) {
    const n = nums.length;
  
    // Check if the array contains less than two elements
    if (n < 2) {
      return 0;
    }
  
    // Find the maximum element in the array
    let maxNum = Math.max(...nums);
  
    // Perform radix sort
    let exp = 1;
    const sortedNums = [...nums];
  
    while (Math.floor(maxNum / exp) > 0) {
      const count = Array(10).fill(0); // Count array for each digit
      const output = Array(n).fill(0); // Output array
  
      // Count the frequency of each digit
      for (let i = 0; i < n; i++) {
        const digit = Math.floor(sortedNums[i] / exp) % 10;
        count[digit]++;
      }
  
      // Calculate the cumulative count
      for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
      }
  
      // Place the elements in the correct positions
      for (let i = n - 1; i >= 0; i--) {
        const digit = Math.floor(sortedNums[i] / exp) % 10;
        output[count[digit] - 1] = sortedNums[i];
        count[digit]--;
      }
  
      // Update the sorted array
      sortedNums.splice(0, n, ...output);
  
      // Update the exponent for the next iteration
      exp *= 10;
    }
  
    // Find the maximum difference between successive elements
    let maxDiff = 0;
    for (let i = 1; i < n; i++) {
      maxDiff = Math.max(maxDiff, sortedNums[i] - sortedNums[i - 1]);
    }
  
    return maxDiff;
  }
  
  // Test case
  const num = [3, 6, 9, 1];
  const maxGap = maximumGap(num);
  console.log(maxGap);
  
/// Output:- 3


//// Question--5 ////

function containsDuplicate(nums) {
    const set = new Set();
  
    for (const num of nums) {
      if (set.has(num)) {
        return true; // Found a duplicate
      }
      set.add(num);
    }
  
    return false; // No duplicates found
  }
  
  // Test case
  const num1 = [1, 2, 3, 1];
  const hasDuplicate = containsDuplicate(num1);
  console.log(hasDuplicate);
  
/// Output:- true


//// Question--6 ////

function findMinArrowShots(points) {
    if (points.length === 0) {
      return 0;
    }
  
    points.sort((a, b) => a[1] - b[1]);
  
    let arrows = 1;
    let end = points[0][1];
  
    for (let i = 1; i < points.length; i++) {
      if (points[i][0] > end) {
        arrows++;
        end = points[i][1];
      }
    }
  
    return arrows;
  }
  
  // Test case
  const points = [[10, 16], [2, 8], [1, 6], [7, 12]];
  const minArrows = findMinArrowShots(points);
  console.log(minArrows);
  
 /// Output:- 2


//// Question--7 ////

function lengthOfLIS(nums) {
    const n = nums.length;
    const dp = Array(n).fill(1);
  
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
    }
  
    return Math.max(...dp);
  }
  
  // Test case
  const num2 = [10, 9, 2, 5, 3, 7, 101, 18];
  const longestSubsequenceLength = lengthOfLIS(num2);
  console.log(longestSubsequenceLength);
  /// Output:- 4


//// Question--8 ////

function find132pattern(nums) {
    const stack = [];
    let k = -Infinity;
  
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] < k) {
        return true; // Found a 132 pattern
      }
  
      while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
        k = Math.max(k, stack.pop()); // Update k as the popped elements
      }
  
      stack.push(nums[i]);
    }
  
    return false; // No 132 pattern found
  }
  
  // Test case
  const num3 = [1, 2, 3, 4];
  const has132pattern = find132pattern(num3);
  console.log(has132pattern);
   /// Output:- false



/////////////////////////////////////////// END ////////////////////////////////////////////
  