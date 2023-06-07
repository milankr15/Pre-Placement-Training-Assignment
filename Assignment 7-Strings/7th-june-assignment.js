////// SOLUTIONS OF THE ASSIGNMENT QUESTIONS--7 ///////

//// Question--1 ////

function isIsomorphicCharacter(s, t) {
    if (s.length !== t.length) {
      return false; // Strings must have the same length to be isomorphic
    }
  
    const charMap = new Map(); // Hash map to store character mappings
  
    for (let i = 0; i < s.length; i++) {
      const charS = s[i];
      const charT = t[i];
  
      if (charMap.has(charS)) {
        if (charMap.get(charS) !== charT) {
          return false; // Violation: character in s already mapped to a different character in t
        }
      } else {
        // Check if charT is already mapped to another character in s
        if (Array.from(charMap.values()).includes(charT)) {
          return false; // Violation: charT is already mapped to a different character in s
        }
        charMap.set(charS, charT); // Add character mapping to the hash map
      }
    }
  
    return true; // Strings are isomorphic
  }
  
  const s = "egg";
  const t = "add";
  console.log(isIsomorphicCharacter(s, t)); // Output: true
  

  //// Question--2 ////

  function isStrobogrammaticNumber(num) {
    const validPairs = {
      '0': '0',
      '1': '1',
      '6': '9',
      '8': '8',
      '9': '6',
    };
  
    let left = 0;
    let right = num.length - 1;
  
    while (left <= right) {
      const leftDigit = num[left];
      const rightDigit = num[right];
  
      if (!(leftDigit in validPairs && rightDigit in validPairs)) {
        return false;
      }
  
      if (validPairs[leftDigit] !== rightDigit) {
        return false;
      }
  
      left++;
      right--;
    }
  
    return true;
  }
  const num = "69";
  console.log(isStrobogrammaticNumber(num)); // Output: true
  

  //// Question--3 ////

  function stringsAdd(num1, num2) {
    let result = '';
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;
  
    while (i >= 0 || j >= 0 || carry > 0) {
      const digit1 = i >= 0 ? Number(num1[i]) : 0;
      const digit2 = j >= 0 ? Number(num2[j]) : 0;
  
      const sum = digit1 + digit2 + carry;
      const digitSum = sum % 10;
      carry = Math.floor(sum / 10);
  
      result = digitSum + result;
  
      i--;
      j--;
    }
  
    return result;
  }
  const num1 = '11';
  const num2 = '123';
  console.log(stringsAdd(num1, num2)); // Output: "134"

  function reverseWords(s) {
    // Split the sentence into individual words
    const words = s.split(' ');
  
    // Reverse each word
    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
  
    // Join the reversed words back together with whitespace
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  const s = "Let's take LeetCode contest";
  console.log(reverseWords(s)); // Output: "s'teL ekat edoCteeL tsetnoc"


  //// Question--4 ////

  function reverseWords(s) {
    // Split the sentence into individual words
    const words = s.split(' ');
  
    // Reverse each word
    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
  
    // Join the reversed words back together with whitespace
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  const s = "Let's take LeetCode contest";
  console.log(reverseWords(s)); // Output: "s'teL ekat edoCteeL tsetnoc"
  

  //// Question--5 ////

  function stringReverse(s, k) {
    const arr = s.split('');
  
    for (let i = 0; i < arr.length; i += 2 * k) {
      let left = i;
      let right = Math.min(i + k - 1, arr.length - 1);
  
      while (left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
      }
    }
  
    return arr.join('');
  }
  const s = 'abcdefg';
  const k = 2;
  console.log(stringReverse(s, k)); // Output: "bacdfeg"


  //// Question--6 ////

  function canShiftPosition(s, goal) {
    if (s.length !== goal.length) {
      return false; // Different lengths, not possible to obtain goal
    }
  
    const concatenated = s + s;
    return concatenated.includes(goal);
  }
  
  const s = 'abcde';
  const goal = 'cdeab';
  console.log(canShiftPosition(s, goal)); // Output: true


  //// Question--7 ////

  function stringsCompare(s, t) {
    let i = s.length - 1;
    let j = t.length - 1;
    let backspaceS = 0;
    let backspaceT = 0;
  
    while (i >= 0 || j >= 0) {
      // Find the next valid character in string s
      while (i >= 0 && (s[i] === '#' || backspaceS > 0)) {
        if (s[i] === '#') {
          backspaceS++;
        } else {
          backspaceS--;
        }
        i--;
      }
  
      // Find the next valid character in string t
      while (j >= 0 && (t[j] === '#' || backspaceT > 0)) {
        if (t[j] === '#') {
          backspaceT++;
        } else {
          backspaceT--;
        }
        j--;
      }
  
      // Check if the characters match
      if (i >= 0 && j >= 0 && s[i] !== t[j]) {
        return false;
      }
  
      // Check if one string has more characters remaining
      if ((i >= 0) !== (j >= 0)) {
        return false;
      }
  
      i--;
      j--;
    }
  
    return true;
  }
  const s = 'ab#c';
  const t = 'ad#c';
  console.log(stringsCompare(s, t)); // Output: true


  //// Question--8 ////

  function checkStraightLine(coordinates) {
    const [x1, y1] = coordinates[0];
    const [x2, y2] = coordinates[1];
    const initialSlope = (y2 - y1) / (x2 - x1);
  
    for (let i = 2; i < coordinates.length; i++) {
      const [x, y] = coordinates[i];
      const slope = (y - y1) / (x - x1);
  
      if (slope !== initialSlope) {
        return false;
      }
    }
  
    return true;
  }
  const coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
  console.log(checkStraightLine(coordinates)); // Output: true


  //////////////////////////END/////////////////////////////////////////////
  