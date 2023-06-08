////// SOLUTIONS OF THE ASSIGNMENT QUESTIONS--7 ///////

//// Question--1 ////

function deleteMinimumSum(s1, s2) {
    const m = s1.length;
    const n = s2.length;
    
    // Create a 2D array to store the minimum ASCII sum of deleted characters
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    // Calculate the ASCII sum for string s1
    let sum1 = 0;
    for (let i = 1; i <= m; i++) {
      sum1 += s1.charCodeAt(i - 1);
      dp[i][0] = sum1;
    }
    
    // Calculate the ASCII sum for string s2
    let sum2 = 0;
    for (let j = 1; j <= n; j++) {
      sum2 += s2.charCodeAt(j - 1);
      dp[0][j] = sum2;
    }
    
    // Fill in the dp array
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (s1[i - 1] === s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(
            dp[i - 1][j] + s1.charCodeAt(i - 1),
            dp[i][j - 1] + s2.charCodeAt(j - 1)
          );
        }
      }
    }
    
    return dp[m][n];
  }
  
  // Test the function
  const s1 = "sea";
  const s2 = "eat";
  const result = deleteMinimumSum(s1, s2);
  console.log(result); // Output: 231
  

  //// Question--2 ////

  function isValid(s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (char === '(' || char === '*') {
        stack.push(char);
      } else if (char === ')') {
        if (stack.length > 0 && stack[stack.length - 1] === '(') {
          stack.pop();
        } else if (stack.length > 0 && stack[stack.length - 1] === '*') {
          stack.pop();
        } else if (stack.length > 0 && stack[stack.length - 1] !== '(' && stack[stack.length - 1] !== '*') {
          return false;
        } else {
          return false;
        }
      }
    }
  
    let count = 0;
  
    while (stack.length > 0) {
      const char = stack.pop();
  
      if (char === '(') {
        if (count === 0) {
          return false;
        } else {
          count--;
        }
      } else {
        count++;
      }
    }
  
    return true;
  }
  
  // Test the function
  const s = "()";
  const result = isValid(s);
  console.log(result); // Output: true

  
  //// Question--3 ////

  function distanceMin(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    
    // Create a 2D array to store the minimum number of steps
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    // Initialize the first row and column
    for (let i = 1; i <= m; i++) {
      dp[i][0] = i;
    }
    for (let j = 1; j <= n; j++) {
      dp[0][j] = j;
    }
    
    // Fill in the dp array
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
        }
      }
    }
    
    return dp[m][n];
  }
  
  // Test the function
  const word1 = "sea";
  const word2 = "eat";
  const result = distanceMin(word1, word2);
  console.log(result); // Output: 2


  //// Question--4 ////

  class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function constructTreeFromString(s) {
    if (!s || s.length === 0) {
      return null;
    }
  
    // Find the value of the root node
    let i = 0;
    while (i < s.length && !isNaN(parseInt(s[i]))) {
      i++;
    }
    const rootVal = parseInt(s.substring(0, i));
    const root = new TreeNode(rootVal);
  
    // Recursive call for the left child
    let j = i;
    let openCount = 0;
    while (j < s.length) {
      if (s[j] === '(') {
        openCount++;
      } else if (s[j] === ')') {
        openCount--;
      }
  
      if (openCount === 0) {
        break;
      }
  
      j++;
    }
  
    if (i < j) {
      root.left = constructTreeFromString(s.substring(i + 1, j));
    }
  
    // Recursive call for the right child
    if (j + 2 < s.length) {
      root.right = constructTreeFromString(s.substring(j + 2, s.length - 1));
    }
  
    return root;
  }
  
  // Function to flatten the binary tree in preorder traversal
  function flattenTree(root) {
    if (!root) {
      return [];
    }
  
    const result = [root.val];
    const left = flattenTree(root.left);
    const right = flattenTree(root.right);
  
    return result.concat(left, right);
  }
  
  // Test the function
  const s = "4(2(3)(1))(6(5))";
  const root = constructTreeFromString(s);
  const flattenedTree = flattenTree(root);
  console.log(flattenedTree); // Output: [4, 2, 3, 1, 6, 5]
  

  //// Question--5 ////

  function compressArray(chars) {
    let i = 0; // Pointer for reading characters
    let j = 0; // Pointer for writing characters
    let count = 0; // Count of consecutive repeating characters
  
    while (i < chars.length) {
      const char = chars[i];
      count = 0;
  
      // Count the number of consecutive repeating characters
      while (i < chars.length && chars[i] === char) {
        count++;
        i++;
      }
  
      // Write the character and its count to the modified array
      chars[j] = char;
      j++;
  
      if (count > 1) {
        const countStr = count.toString();
  
        for (let k = 0; k < countStr.length; k++) {
          chars[j] = countStr[k];
          j++;
        }
      }
    }
  
    return j;
  }
  
  // Test the function
  const chars = ["a","a","b","b","c","c","c"];
  const newLength = compressArray(chars);
  console.log(newLength); // Output: 6
  console.log(chars.slice(0, newLength)); // Output: ["a", "2", "b", "2", "c", "3"]

  
  //// Question--6 ////

  function findAnagrams(s, p) {
    const result = [];
    
    if (s.length < p.length) {
      return result;
    }
    
    const pFreq = Array(26).fill(0);
    const windowFreq = Array(26).fill(0);
    const aCharCode = 'a'.charCodeAt(0);
    
    // Count the frequencies of characters in p
    for (let i = 0; i < p.length; i++) {
      pFreq[p.charCodeAt(i) - aCharCode]++;
    }
    
    let left = 0;
    
    for (let right = 0; right < s.length; right++) {
      const rightChar = s.charCodeAt(right) - aCharCode;
      
      // Add the current character to the window
      windowFreq[rightChar]++;
      
      // Shrink the window until it's the same length as p
      while (right - left + 1 > p.length) {
        const leftChar = s.charCodeAt(left) - aCharCode;
        
        // Remove the leftmost character from the window
        windowFreq[leftChar]--;
        left++;
      }
      
      // Compare the frequencies of the current window with p
      if (right - left + 1 === p.length && frequenciesMatch(pFreq, windowFreq)) {
        result.push(left);
      }
    }
    
    return result;
  }
  
  // Helper function to compare two frequency arrays
  function frequenciesMatch(freq1, freq2) {
    for (let i = 0; i < freq1.length; i++) {
      if (freq1[i] !== freq2[i]) {
        return false;
      }
    }
    return true;
  }
  
  // Test the function
  const s = "cbaebabacd";
  const p = "abc";
  const result = findAnagrams(s, p);
  console.log(result); // Output: [0, 6]


  //// Question--7 ////

  function decodeString(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== ']') {
        stack.push(s[i]);
      } else {
        // Find the encoded string inside the square brackets
        let encodedString = '';
        while (stack[stack.length - 1] !== '[') {
          encodedString = stack.pop() + encodedString;
        }
        stack.pop(); // Remove the '[' character
        
        // Find the repetition count
        let repetitionCount = '';
        while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
          repetitionCount = stack.pop() + repetitionCount;
        }
        repetitionCount = parseInt(repetitionCount);
        
        // Repeat the encoded string and push it back to the stack
        const repeatedString = encodedString.repeat(repetitionCount);
        for (let j = 0; j < repeatedString.length; j++) {
          stack.push(repeatedString[j]);
        }
      }
    }
    
    // Construct the final decoded string
    let decodedString = '';
    while (stack.length > 0) {
      decodedString = stack.pop() + decodedString;
    }
    
    return decodedString;
  }
  
  // Test the function
  const s = "3[a]2[bc]";
  const decodedString = decodeString(s);
  console.log(decodedString); // Output: "aaabcbc"

  
  //// Question--8 ////

  function stringsBuddy(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
    
    if (s === goal) {
      const charCount = new Map();
      for (let i = 0; i < s.length; i++) {
        if (charCount.has(s[i])) {
          return true;
        }
        charCount.set(s[i], true);
      }
      return false;
    }
    
    const diffPositions = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        diffPositions.push(i);
      }
      if (diffPositions.length > 2) {
        return false;
      }
    }
    
    if (diffPositions.length !== 2) {
      return false;
    }
    
    const [pos1, pos2] = diffPositions;
    return s[pos1] === goal[pos2] && s[pos2] === goal[pos1];
  }
  
  // Test the function
  const s = "ab";
  const goal = "ba";
  const result = stringsBuddy(s, goal);
  conconsole.log(result); 
  // Output: true
  

  ///////////////////////////////////END/////////////////////////////////////////
  