////// SOLUTIONS OF THE ASSIGNMENT QUESTIONS--5///////

//// Question--1////

function construct2DArrayElement(original, m, n) {
    const length = original.length;
    if (length !== m * n) {
      return [];
    }
  
    const result = [];
    for (let i = 0; i < m; i++) {
      const row = original.slice(i * n, (i + 1) * n);
      result.push(row);
    }
  
    return result;
  }
  
  // Example usage:
  const original = [1, 2, 3, 4];
  const m = 2;
  const n = 2;
  const twoDArray = construct2DArrayElement(original, m, n);
  console.log(twoDArray); // Output: [[1, 2], [3, 4]]

  //// Question--2////

  function coinsArrange(n) {
    let left = 0;
    let right = n;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const curr = mid * (mid + 1) / 2;
  
      if (curr === n) {
        return mid;
      } else if (curr < n) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return right;
  }
  
  // Example usage:
  const n = 5;
  const completeRows = coinsArrange(n);
  console.log(completeRows); // Output: 2


  //// Question--3////

  function sortedSquares(nums) {
    const squaredArray = nums.map(num => num * num);
    squaredArray.sort((a, b) => a - b);
    return squaredArray;
  }
  
  // Example usage:
  const nums = [-4, -1, 0, 3, 10];
  const squaredNums = sortedSquares(nums);
  console.log(squaredNums); // Output: [0, 1, 9, 16, 100]


  //// Question--4////

  function notPresent(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const answer = [[], []];
  
    for (const num of nums1) {
      if (!set2.has(num)) {
        answer[0].push(num);
      }
    }
  
    for (const num of nums2) {
      if (!set1.has(num)) {
        answer[1].push(num);
      }
    }
  
    return answer;
  }
  
  // Example usage:
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  const result = notPresent(nums1, nums2);
  console.log(result); // Output: [[1, 3], [4, 6]]


   //// Question--5////

   function findTheDistanceValue(arr1, arr2, d) {
    let distance = 0;
  
    for (let i = 0; i < arr1.length; i++) {
      let found = false;
  
      for (let j = 0; j < arr2.length; j++) {
        if (Math.abs(arr1[i] - arr2[j]) <= d) {
          found = true;
          break;
        }
      }
  
      if (!found) {
        distance++;
      }
    }
  
    return distance;
  }
  
  // Example usage:
  const arr1 = [4, 5, 8];
  const arr2 = [10, 9, 1, 8];
  const d = 2;
  const result = findTheDistanceValue(arr1, arr2, d);
  console.log(result); // Output: 2

  
  //// Question--6////

  function findDuplicates(nums) {
    const result = [];
  
    for (let i = 0; i < nums.length; i++) {
      const num = Math.abs(nums[i]);
      if (nums[num - 1] > 0) {
        nums[num - 1] *= -1;
      } else {
        result.push(num);
      }
    }
  
    return result;
  }
  
  // Example usage:
  const nums = [4, 3, 2, 7, 8, 2, 3, 1];
  const duplicates = findDuplicates(nums);
  console.log(duplicates); // Output: [2, 3]


  //// Question--7////

  function findMinnNumber(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
  
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return nums[left];
  }
  
  // Example usage:
  const nums = [3, 4, 5, 1, 2];
  const minElement = findMinnNumber(nums);
  console.log(minElement); // Output: 1


  //// Question--8////

  function findOriginalArray(changed) {
    const doubledSet = new Set();
  
    for (const num of changed) {
      if (num % 2 === 0 && doubledSet.has(num / 2)) {
        doubledSet.delete(num / 2);
      } else {
        doubledSet.add(num);
      }
    }
  
    if (doubledSet.size === 0) {
      return [];
    }
  
    return Array.from(doubledSet);
  }
  
  // Example usage:
  const changed = [1, 3, 4, 2, 6, 8];
  const original = findOriginalArray(changed);
  console.log(original); // Output: [1, 3, 4]


  /////////////////////////////////////END//////////////////////////////////////////////