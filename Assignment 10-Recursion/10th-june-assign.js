////// SOLUTIONS OF THE ASSIGNMENT QUESTIONS--10 ///////

//// Question--1 ////

function PowerOfThree(n) {
    if (n <= 0) {
      return false;
    }
  
    const logarithm = Math.log(n) / Math.log(3);
    return Number.isInteger(logarithm);
  }
  console.log(PowerOfThree(27));  // Output: true
  console.log(PowerOfThree(0));   // Output: false
  console.log(PowerOfThree(-1));  // Output: false


  //// Question--2 ////

  function remainingLast(n) {
    let leftToRight = true;  // Flag to indicate the direction of iteration
    let remaining = n;       // Number of remaining elements
    let step = 1;            // Step size
  
    let head = 1;            // Leftmost element
    while (remaining > 1) {
      if (leftToRight || remaining % 2 === 1) {
        head += step;
      }
      remaining = Math.floor(remaining / 2);
      step *= 2;
      leftToRight = !leftToRight;
    }
  
    return head;
  }
  
  console.log(remainingLast(9));  // Output: 6
  console.log(remainingLast(1));  // Output: 1


  //// Question--3 ////

  function printSubsets(set, current = '', index = 0) {
    const n = set.length;
  
    // Base case: when we reach the end of the set
    if (index === n) {
      console.log(`{ ${current} }`);
      return;
    }
  
    // Recursive case 1: include the current element
    printSubsets(set, current + set[index], index + 1);
  
    // Recursive case 2: exclude the current element
    printSubsets(set, current, index + 1);
  }
  
  console.log("Example 1:");
  printSubsets("abc");
  console.log("\nExample 2:");
  printSubsets("abcd");
  //Output : Example 1:{ abc } ,{ ab } , { ac }, { a }, { bc }, { b }, { c }
  //Output : Example 2:{ abcd } ,{ abc }, { abd } , { ab },{ acd }, { ac }, { ad }


  //// Question--4 ////

  function lengthCalculate(str) {
    // Base case: when the string is empty or undefined
    if (!str || str.length === 0) {
      return 0;
    }
  
    // Recursive case: add 1 for the current character and calculate the length of the remaining substring
    return 1 + lengthCalculate(str.slice(1));
  }
  
  console.log(lengthCalculate("abcd"));              // Output: 4
  console.log(lengthCalculate("GEEKSFORGEEKS"));     // Output: 13


  //// Question--5 ////

  function substringsCount(str) {
    const n = str.length;
    let count = 0;
  
    for (let i = 0; i < n; i++) {
      let j = i;
  
      // Count substrings with current character as the starting and ending character
      while (j < n && str[i] === str[j]) {
        count++;
        j++;
      }
    }
  
    return count;
  }
  
  console.log(substringsCount("abcab"));    // Output: 7
  console.log(substringsCount("aba"));      // Output: 4


  //// Question--6 ////

  function towerOfHanoi(n, source, destination, auxiliary) {
    if (n === 1) {
      console.log(`Move disk 1 from rod ${source} to rod ${destination}`);
      return 1;
    }
  
    let moves = 0;
  
    moves += towerOfHanoi(n - 1, source, auxiliary, destination);
    console.log(`Move disk ${n} from rod ${source} to rod ${destination}`);
    moves++;
  
    moves += towerOfHanoi(n - 1, auxiliary, destination, source);
  
    return moves;
  }
  
  console.log("Example 1:");
  const N1 = 2;
  const moves1 = towerOfHanoi(N1, 1, 3, 2);
  console.log("Total moves:", moves1);
  
  console.log("\nExample 2:");
  const N2 = 3;
  const moves2 = towerOfHanoi(N2, 1, 3, 2);
  console.log("Total moves:", moves2);
  /// Ouput : Example 1: Move disk 1 from rod 1 to rod 2 ; Move disk 2 from rod 1 to rod 3 ; Move disk 1 from rod 2 to rod 3 ; Total moves: 3
  // Output : Example 2: Move disk 1 from rod 1 to rod 3 ; Move disk 2 from rod 1 to rod 2 ; Move disk 1 from rod 3 to rod 2 ; Move disk 3 from rod 1 to rod 3 ; Move disk 1 from rod 2 to rod 1 ; 
               // Move disk 2 from rod 2 to rod 3 ; Move disk 1 from rod 1 to rod 3 ; Total moves: 7


//// Question--7 ////

function printPermutations(str, left = 0, right = str.length - 1) {
    if (left === right) {
      console.log(str);
      return;
    }
  
    for (let i = left; i <= right; i++) {
      str = swapCharacters(str, left, i);
      printPermutations(str, left + 1, right);
      str = swapCharacters(str, left, i); // backtrack (restore the original string)
    }
  }
  
  function swapCharacters(str, i, j) {
    const charArray = str.split('');
    const temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return charArray.join('');
  }
  
  console.log("Example 1:");
  printPermutations("cd");
  
  console.log("\nExample 2:");
  printPermutations("abb");
  //Output : Example 1: cd , dc  
  //Output : Example 2: abb, abb, bab, bba, bba, bab


  //// Question--8 ////

  function consonantsCount(str) {
    const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (consonants.includes(str[i])) {
        count++;
      }
    }
  
    return count;
  }
  
  console.log(consonantsCount("abc de"));                          // Output: 3
  console.log(consonantsCount("geeksforgeeks portal"));            // Output: 12

  
///////////////////////// END ///////////////////////////////////////////////////












  
  
  
 
  
  
  
  

  
  



