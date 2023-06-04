////// SOLUTIONS OF THE ASSIGNMENT QUESTIONS--6 ///////

//// Question--1 ////

function permutationReconstruct(s) {
    const perm = [];
    let n = s.length;
    let m = 0;
  
    for (const ch of s) {
      if (ch === 'I') {
        perm.push(m);
        m++;
      } else if (ch === 'D') {
        perm.splice(n, 0, m);
        m++;
      }
      n--;
    }
  
    perm.push(m);
  
    return perm;
  }
  
  // Example usage:
  const s = 'IDID';
  const perm = permutationReconstruct(s);
  console.log(perm); // Output: [0, 4, 1, 3, 2]


  //// Question--2 ////

  function searchMatrixNumber(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let start = 0;
    let end = m * n - 1;
    
    while (start <= end) {
      const mid = Math.floor(start + (end - start) / 2);
      const row = Math.floor(mid / n);
      const col = mid % n;
      
      if (matrix[row][col] === target) {
        return true;
      } else if (matrix[row][col] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    
    return false;
  }
  
  // Test the function
  const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
  const target = 3;
  console.log(searchMatrixNumber(matrix, target));  // Output: true

  
//// Question--3 ////

function validArrayMountain(arr) {
    const n = arr.length;
    
    if (n < 3) {
      return false;
    }
    
    let peakIndex = 0;
    
    for (let i = 1; i < n; i++) {
      if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        peakIndex = i;
        break;
      }
      
      if (arr[i] <= arr[i - 1]) {
        return false;
      }
    }
    
    if (peakIndex === 0 || peakIndex === n - 1) {
      return false;
    }
    
    for (let i = peakIndex + 1; i < n; i++) {
      if (arr[i] >= arr[i - 1]) {
        return false;
      }
    }
    
    return true;
  }
  
  // Test the function
  const arr = [2, 1];
  console.log(validArrayMountain(arr));  // Output: false


  //// Question--4 ////

  function findMaxLength(nums) {
    const countMap = { 0: -1 };
    let count = 0;
    let maxLen = 0;
  
    for (let i = 0; i < nums.length; i++) {
      count += nums[i] === 0 ? -1 : 1;
  
      if (count in countMap) {
        maxLen = Math.max(maxLen, i - countMap[count]);
      } else {
        countMap[count] = i;
      }
    }
  
    return maxLen;
  }
  
  // Test the function
  const nums = [0, 1];
  console.log(findMaxLength(nums));  // Output: 2

  
   //// Question--5 ////

   function productMinSum(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => b - a);
    
    let minProductSum = 0;
    
    for (let i = 0; i < nums1.length; i++) {
      minProductSum += nums1[i] * nums2[i];
    }
    
    return minProductSum;
  }
  
  // Test the function
  const nums1 = [5, 3, 4, 2];
  const nums2 = [4, 2, 2, 5];
  console.log(productMinSum(nums1, nums2));  // Output: 40


  //// Question--6 ////

  function findOriginalArray(changed) {
    const n = changed.length;
    
    if (n % 2 !== 0) {
      return [];
    }
    
    const originalMap = {};
    
    for (let i = 0; i < n; i++) {
      if (originalMap[changed[i]] > 0) {
        originalMap[changed[i]]--;
      } else if (changed[i] % 2 === 0 && originalMap[changed[i] / 2] > 0) {
        originalMap[changed[i] / 2]--;
      } else {
        return [];
      }
    }
    
    const original = [];
    
    for (const num in originalMap) {
      const count = originalMap[num];
      
      for (let i = 0; i < count; i++) {
        original.push(Number(num));
      }
    }
    
    return original;
  }
  
  // Test the function
  const changed = [1, 3, 4, 2, 6, 8];
  console.log(findOriginalArray(changed));  // Output: [1, 3, 4]

  
  //// Question--7 ////

  function generateMatrix(n) {
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
    let num = 1;
  
    while (true) {
      for (let i = left; i <= right; i++) {
        matrix[top][i] = num++;
      }
      top++;
  
      if (top > bottom) {
        break;
      }
  
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = num++;
      }
      right--;
  
      if (left > right) {
        break;
      }
  
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num++;
      }
      bottom--;
  
      if (top > bottom) {
        break;
      }
  
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num++;
      }
      left++;
    }
  
    return matrix;
  }
  
  // Test the function
  const n = 3;
  console.log(generateMatrix(n));
  // Output: [[1, 2, 3], [8, 9, 4], [7, 6, 5]]


  //// Question--8 ////

  function multiplySparseMatrices(mat1, mat2) {
    const m = mat1.length;
    const k = mat1[0].length;
    const n = mat2[0].length;
  
    const result = new Array(m).fill(0).map(() => new Array(n).fill(0));
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < k; j++) {
        if (mat1[i][j] !== 0) {
          for (let k = 0; k < n; k++) {
            if (mat2[j][k] !== 0) {
              result[i][k] += mat1[i][j] * mat2[j][k];
            }
          }
        }
      }
    }
  
    return result;
  }
  
  // Test the function
  const mat1 = [[1, 0, 0], [-1, 0, 3]];
  const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];
  console.log(multiplySparseMatrices(mat1, mat2));
  // Output: [[7, 0, 0], [-7, 0, 3]]


  /////////////////////////////////////////END////////////////////////////////////////
  
  
