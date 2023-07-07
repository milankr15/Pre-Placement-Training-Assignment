/////// SOLUTIONS OF THE ASSIGNMENT QUESTIONS--24 ///////

//// Question--1 ////

function romanInteger(s) {
    const romanToIntMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const currentVal = romanToIntMap[s[i]];
        const nextVal = romanToIntMap[s[i + 1]];

        if (nextVal && nextVal > currentVal) {
            result += nextVal - currentVal;
            i++; // Skip the next character since it has been processed
        } else {
            result += currentVal;
        }
    }

    return result;
}

// Example usage:
console.log(romanInteger("III")); // Output: 3
console.log(romanInteger("LVIII")); // Output: 58


//// Question--2 ////

function longestSubstringLenght(s) {
    const charSet = new Set();
    let maxLength = 0;
    let start = 0;
    let end = 0;

    while (end < s.length) {
        const currentChar = s.charAt(end);
        if (!charSet.has(currentChar)) {
            charSet.add(currentChar);
            maxLength = Math.max(maxLength, end - start + 1);
            end++;
        } else {
            charSet.delete(s.charAt(start));
            start++;
        }
    }

    return maxLength;
}

// Example usage:
console.log(longestSubstringLenght("abcabcbb")); // Output: 3
console.log(longestSubstringLenght("bbbbb")); // Output: 1
console.log(longestSubstringLenght("pwwkew")); // Output: 3


//// Question--3 ////

function majorityElement(nums) {
    let majority = null;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            majority = nums[i];
            count = 1;
        } else if (nums[i] === majority) {
            count++;
        } else {
            count--;
        }
    }

    return majority;
}

// Example usage:
console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2

//// Question--4 ////

function groupAnagrams(strs) {
    const anagramMap = new Map();

    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        const sortedKey = str.split('').sort().join('');

        if (anagramMap.has(sortedKey)) {
            anagramMap.get(sortedKey).push(str);
        } else {
            anagramMap.set(sortedKey, [str]);
        }
    }

    return Array.from(anagramMap.values());
}

// Example usage:
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

console.log(groupAnagrams([""]));
// Output: [[""]]

console.log(groupAnagrams(["a"]));
// Output: [["a"]]


//// Question-5 ////

function uglyNumber(n) {
    const ugly = new Array(n);
    ugly[0] = 1;

    let p2 = 0;
    let p3 = 0;
    let p5 = 0;

    for (let i = 1; i < n; i++) {
        const nextUgly = Math.min(ugly[p2] * 2, ugly[p3] * 3, ugly[p5] * 5);
        ugly[i] = nextUgly;

        if (nextUgly === ugly[p2] * 2) p2++;
        if (nextUgly === ugly[p3] * 3) p3++;
        if (nextUgly === ugly[p5] * 5) p5++;
    }

    return ugly[n - 1];
}

// Example usage:
console.log(uglyNumber(10)); // Output: 12
console.log(uglyNumber(1)); // Output: 1


//// Question-6 ////

function topKFrequent(words, k) {
    const frequencyMap = new Map();

    for (const word of words) {
        frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
    }

    // Create an array of unique words
    const uniqueWords = Array.from(frequencyMap.keys());

    uniqueWords.sort((a, b) => {
        const freqA = frequencyMap.get(a);
        const freqB = frequencyMap.get(b);

        if (freqA !== freqB) {
            return freqB - freqA; // Sort by frequency in descending order
        } else {
            return a.localeCompare(b); // Sort lexicographically
        }
    });

    return uniqueWords.slice(0, k);
}

// Example usage:
console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
// Output: ["i", "love"]

console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4));
// Output: ["the", "is", "sunny", "day"]


//// Question-7 ////

function maxSlidingWindow(nums, k) {
    const window = []; // Deque to store indices of elements
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        // Remove indices of elements outside the current sliding window
        if (window.length > 0 && window[0] <= i - k) {
            window.shift();
        }

        // Remove indices of elements smaller than the current element
        while (window.length > 0 && nums[window[window.length - 1]] < nums[i]) {
            window.pop();
        }

        window.push(i);

        if (i >= k - 1) {
            result.push(nums[window[0]]);
        }
    }

    return result;
}

// Example usage:
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// Output: [3, 3, 5, 5, 6, 7]

console.log(maxSlidingWindow([1], 1));
// Output: [1]


//// Question-8 ////

function findElementsClosest(arr, k, x) {
    let left = 0;
    let right = arr.length - 1;

    while (right - left >= k) {
        if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
            right--;
        } else {
            left++;
        }
    }

    return arr.slice(left, right + 1);
}

// Example usage:
console.log(findElementsClosest([1, 2, 3, 4, 5], 4, 3));
// Output: [1, 2, 3, 4]

console.log(findElementsClosest([1, 2, 3, 4, 5], 4, -1));
// Output: [1, 2, 3, 4]






/////////////////////////////END/////////////////////////////////////////////

