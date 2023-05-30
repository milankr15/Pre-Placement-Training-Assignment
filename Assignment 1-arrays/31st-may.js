/// SOLUTIONS OF THE ASSIGNMENT-1 

///Question--1

function sumOfTow(nums, target) {
    const numberMap = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
  
      if (numberMap.has(complement)) {
        return [numberMap.get(complement), i];
      }
  
      numberMap.set(nums[i], i);
    }
  
    return [];
  }
  
  // Example usage
  const nums = [2, 7, 11, 15];
  const target = 9;
  const result = sumOfTow(nums, target);
  console.log(result); // Output: [0, 1]


  ///Question--2

  function removeItems(nums, val) {
    let k = 0; // Number of elements not equal to val
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[k] = nums[i];
        k++;
      }
    }
  
    return k;
  }
  
  // Example usage
  const nums = [3, 2, 2, 3];
  const val = 3;
  const result = removeItems(nums, val);
  console.log(result); // Output: 2
  console.log(nums); // Output: [2, 2, _, _]


  ///Question--3

  function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
    const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return left;
  }
  
  // Example usage
  const nums = [1, 3, 5, 6];
  const target = 5;
  const result = search(nums, target);
  console.log(result); // Output: 2


  ///Question--4

  function increment(digits) {
    const n = digits.length;
  
    // Start from the least significant digit
    for (let i = n - 1; i >= 0; i--) {
      // Increment the current digit
      digits[i]++;
  
      // Check for carry
      if (digits[i] < 10) {
        // No carry, we are done
        return digits;
      }
  
      // Carry occurred, set current digit to 0 and propagate the carry
      digits[i] = 0;
    }
  
    // If we reach here, there is still a carry at the most significant digit
    // We need to add an additional digit
    digits.unshift(1);
  
    return digits;
  }
  
  // Example usage
  const digits = [1, 2, 3];
  const result = increment(digits);
  console.log(result); // Output: [1, 2, 4]


  ///Question--5

  function mergeElement(nums1, m, nums2, n) {
    let i = m - 1; // Index of last element in nums1
    let j = n - 1; // Index of last element in nums2
    let k = m + n - 1; // Index of last position in merged nums1 array
  
    // Merge nums1 and nums2 from the end
    while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
        nums1[k] = nums1[i];
        i--;
      } else {
        nums1[k] = nums2[j];
        j--;
      }
      k--;
    }
  
    // If there are remaining elements in nums2, copy them to nums1
    while (j >= 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }
  
  // Example usage
  const nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 5, 6];
  const n = 3;
  mergeElement(nums1, m, nums2, n);
  console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
  

  ///Question--6

  function duplicate(nums) {
    const set = new Set();
  
    for (let num of nums) {
      if (set.has(num)) {
        return true;
      }
      set.add(num);
    }
  
    return false;
  }
  
  // Example usage
  const nums = [1, 2, 3, 1];
  const result = duplicate(nums);
  console.log(result); // Output: true


  ///Question--7

  function moveZeroes(nums) {
    let left = 0; // Position to place the next non-zero element
  
    for (let right = 0; right < nums.length; right++) {
      if (nums[right] !== 0) {
        // Swap the non-zero element with the element at the left position
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
      }
    }
  }
  
  // Example usage
  const nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  console.log(nums); // Output: [1, 3, 12, 0, 0]


  ///Question--8

  function findError(nums) {
    const set = new Set();
    let duplicate, missing;
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
  
    for (let num of nums) {
      if (set.has(num)) {
        duplicate = num;
      } else {
        set.add(num);
        actualSum += num;
      }
    }
  
    missing = expectedSum - actualSum;
  
    return [duplicate, missing];
  }
  
  // Example usage
  const nums = [1, 2, 2, 4];
  const result = findError(nums);
  console.log(result); // Output: [2, 3]

  ////////////////////////END\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\