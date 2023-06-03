////// SOLUTIONS OF THE ASSIGNMENT QUESTIONS--4///////

//// Question--1////

function findCommonNumber(arr1, arr2, arr3) {
    let i = 0;
    let j = 0;
    let k = 0;
    const result = [];
  
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
      if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
        result.push(arr1[i]);
        i++;
        j++;
        k++;
      } else if (arr1[i] < arr2[j]) {
        i++;
      } else if (arr2[j] < arr3[k]) {
        j++;
      } else {
        k++;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 5, 7, 9];
  const arr3 = [1, 3, 4, 5, 8];
  
  const commonElements = findCommonNumber(arr1, arr2, arr3);
  console.log(commonElements); 
  // Output: [1, 5]


  //// Question--2////

  function findDistinctIntegers(nums1, nums2) {
    const distinctNums1 = nums1.filter(num => !nums2.includes(num));
    const distinctNums2 = nums2.filter(num => !nums1.includes(num));
  
    return [distinctNums1, distinctNums2];
  }
  
  // Example usage:
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  
  const distinctIntegers = findDistinctIntegers(nums1, nums2);
  console.log(distinctIntegers); 
  // Output: [[1, 3], [4, 6]]


  //// Question--3////

  function transposeMatrix(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const transposedMatrix = [];
  
    for (let i = 0; i < columns; i++) {
      const newRow = [];
      for (let j = 0; j < rows; j++) {
        newRow.push(matrix[j][i]);
      }
      transposedMatrix.push(newRow);
    }
  
    return transposedMatrix;
  }
  
  // Example usage:
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  
  const transposedMatrix = transposeMatrix(matrix);
  console.log(transposedMatrix); 
  // Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]


  //// Question--4////

  function returnMaximizedArrays(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let sum = 0;
  
    for (let i = 0; i < nums.length; i += 2) {
      sum += nums[i];
    }
  
    return sum;
  }
  
  // Example usage:
  const nums = [1, 4, 3, 2];
  const maxSum = returnMaximizedArrays(nums);
  console.log(maxSum); 
  // Output: 4


  //// Question--5////

  function coinsArrange(n) {
    let count = 0;
    let sum = 0;
  
    while (sum <= n) {
      count++;
      sum += count;
    }
  
    return count - 1;
  }
  
  // Example usage:
  const n = 5;
  const completeRows = coinsArrange(n);
  console.log(completeRows);
  // Output: 2


  //// Question--6////

  function arraySortedSquares(nums) {
    const squaredArr = nums.map(num => num * num); // Square each element
    squaredArr.sort((a, b) => a - b); // Sort the array in non-decreasing order
    return squaredArr;
  }
  
  // Example usage:
  const nums = [-4, -1, 0, 3, 10];
  const squaredNums = arraySortedSquares(nums);
  console.log(squaredNums); 
  // Output: [0, 1, 9, 16, 100]


  //// Question--7////

  function countMax(m, n, ops) {
    let minRow = m;
    let minCol = n;
  
    for (const [row, col] of ops) {
      minRow = Math.min(minRow, row);
      minCol = Math.min(minCol, col);
    }
  
    return minRow * minCol;
  }
  
  // Example usage:
  const m = 3;
  const n = 3;
  const ops = [[2, 2], [3, 3]];
  const maxIntegers = countMax(m, n, ops);
  console.log(maxIntegers); 
  // Output: 4

  //// Question--8////

  function shuffleArrays(nums, n) {
    const shuffledArray = [];
  
    for (let i = 0; i < n; i++) {
      shuffledArray.push(nums[i]);
      shuffledArray.push(nums[i + n]);
    }
  
    return shuffledArray;
  }
  
  // Example usage:
  const nums = [2, 5, 1, 3, 4, 7];
  const n = 3;
  const shuffledNums = shuffleArrays(nums, n);
  console.log(shuffledNums); 
  // Output: [2, 3, 5, 4, 1, 7]

  
  
  /////////////////////////////////END///////////////////////////






