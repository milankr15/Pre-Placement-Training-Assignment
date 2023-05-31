/// SOLUTIONS OF THE ASSIGNMENT QUESTIONS--2

//// Question--1////

function sumArray(nums) {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
  
    let sum = 0;
    // Iterate over the sorted array and add every second element to the sum
    for (let i = 0; i < nums.length; i += 2) {
      sum += nums[i];
    }
  
    return sum;
  }
  
  // Example usage:
  const nums = [1, 4, 3, 2];
  const result = sumArray(nums);
  console.log(result); // Output: 4


  //// Question--2////

  function candiesDistribute(candyType) {
    // Calculate the maximum number of candies Alice can eat
    const maxCandies = candyType.length / 2;
  
    // Create a Set to store the unique types of candies
    const candiesUnique = new Set(candyType);
  
    // Return the minimum between the number of unique candies and the maximum number of candies Alice can eat
    return Math.min(candiesUnique.size, maxCandies);
  }
  
  // Example usage:
  const candyType = [1, 1, 2, 2, 3, 3];
  const result = candiesDistribute(candyType);
  console.log(result); // Output: 3


  //// Question--3////

  function lhsFind(nums) {
    // Create a map to store the frequency of each number
    const mapFrequency = new Map();
    for (const num of nums) {
      mapFrequency.set(num, (mapFrequency.get(num) || 0) + 1);
    }
  
    let maxLen = 0;
    // Iterate over the numbers in the array
    for (const num of mapFrequency.keys()) {
      // Check if the current number and its adjacent numbers form a harmonious subsequence
      if (mapFrequency.has(num + 1)) {
        const currLen = mapFrequency.get(num) + mapFrequency.get(num + 1);
        maxLen = Math.max(maxLen, currLen);
      }
    }
  
    return maxLen;
  }
  
  // Example usage:
  const nums = [1, 3, 2, 2, 5, 2, 3, 7];
  const result = lhsFind(nums);
  console.log(result); // Output: 5


  //// Question--4////

  function placeFlowers(flowerbed, n) {
    let count = 0;
    let i = 0;
  
    while (i < flowerbed.length) {
      // Check if the current plot is empty and its adjacent plots are also empty
      if (
        flowerbed[i] === 0 &&
        (i === 0 || flowerbed[i - 1] === 0) &&
        (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
      ) {
        // Plant a flower in the current plot
        flowerbed[i] = 1;
        count++;
  
        // Check if the required number of flowers has been planted
        if (count === n) {
          return true;
        }
      }
  
      i++;
    }
  
    return false;
  }
  
  // Example usage:
  const flowerbed = [1, 0, 0, 0, 1];
  const n = 1;
  const result = placeFlowers(flowerbed, n);
  console.log(result); // Output: true


  //// Question--5////

  function productMaxi(nums) {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
  
    const n = nums.length;
  
    // Calculate the maximum product by considering two cases:
    // 1. The product of the three largest numbers
    // 2. The product of the two smallest numbers and the largest number
    const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    const product2 = nums[0] * nums[1] * nums[n - 1];
  
    // Return the maximum of the two products
    return Math.max(product1, product2);
  }
  
  // Example usage:
  const nums = [1, 2, 3];
  const result = productMaxi(nums);
  console.log(result); // Output: 6


  //// Question--6////

  function searchNums(nums, target) {
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
  
    return -1;
  }
  
  // Example usage:
  const nums = [-1, 0, 3, 5, 9, 12];
  const target = 9;
  const result = searchNums(nums, target);
  console.log(result); // Output: 4

  //// Question--7////

  function arraysisMonotonic(nums) {
    let increasing = true;
    let decreasing = true;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        increasing = false;
      }
      if (nums[i] > nums[i - 1]) {
        decreasing = false;
      }
    }
  
    return increasing || decreasing;
  }
  
  // Example usage:
  const nums = [1, 2, 2, 3];
  const result = arraysisMonotonic(nums);
  console.log(result); // Output: true


  //// Question--8////

  function minimumScoreNum(nums, k) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const n = nums.length;
    const maxVal = nums[n - 1] - k;
    const minVal = nums[0] + k;
  
    return Math.max(0, maxVal - minVal);
  }
  
  // Example usage:
  const nums = [1];
  const k = 0;
  const result = minimumScoreNum(nums, k);
  console.log(result); // Output: 0

  //------------------end---------------------------------//
