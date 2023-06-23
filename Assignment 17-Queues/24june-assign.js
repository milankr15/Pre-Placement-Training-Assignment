/////// SOLUTIONS OF THE ASSIGNMENT QUESTIONS--17 ///////

//// Question--1 ////

function firstNonRepeatingCharacter(s) {
    // Create a map to store the count of each character
    const charCount = new Map();
  
    // Iterate through the string and count the occurrence of each character
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
  
    // Iterate through the string again and find the first character with count 1
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charCount.get(char) === 1) {
        return i; // Return the index of the first non-repeating character
      }
    }
  
    return -1; // Return -1 if no non-repeating character found
  }
  
  // Test cases
  console.log(firstNonRepeatingCharacter("leetcode")); // Output: 0
  console.log(firstNonRepeatingCharacter("loveleetcode")); // Output: 2
  console.log(firstNonRepeatingCharacter("aabb")); // Output: -1


//// Question--2 ////

function maxSumCircularSubarray(nums) {
    const n = nums.length;
  
    // Case 1: Maximum sum subarray without circular wrap
    let maxSum = nums[0];
    let currentMax = nums[0];
    for (let i = 1; i < n; i++) {
      currentMax = Math.max(nums[i], currentMax + nums[i]);
      maxSum = Math.max(maxSum, currentMax);
    }
  
    // Case 2: Maximum sum subarray with circular wrap
    let totalSum = nums.reduce((sum, num) => sum + num, 0);
  
    let minSum = nums[0];
    let currentMin = nums[0];
    for (let i = 1; i < n; i++) {
      currentMin = Math.min(nums[i], currentMin + nums[i]);
      minSum = Math.min(minSum, currentMin);
    }
  
    const circularMaxSum = totalSum - minSum;
  
    // Return the maximum of the two cases
    return Math.max(maxSum, circularMaxSum);
  }
  
  // Test cases
  console.log(maxSumCircularSubarray([1, -2, 3, -2])); // Output: 3
  console.log(maxSumCircularSubarray([5, -3, 5])); // Output: 10
  console.log(maxSumCircularSubarray([-3, -2, -3])); // Output: -2


//// Question--3 ////

function studentsCount(students, sandwiches) {
    const n = students.length;
    const preferenceCount = [0, 0]; // Number of students preferring each type of sandwich
  
    // Count the number of students preferring each type of sandwich
    for (const student of students) {
      preferenceCount[student]++;
    }
  
    // Iterate through the sandwiches until all students are served or no changes occur
    let servedCount = 0;
    while (servedCount < n) {
      // If the front student prefers the sandwich at the top of the stack, they take it
      if (students[0] === sandwiches[0]) {
        servedCount++;
        preferenceCount[sandwiches[0]]--;
        students.shift();
        sandwiches.shift();
      }
      // If the front student does not prefer the sandwich at the top of the stack,
      // they leave the sandwich and move to the end of the queue
      else {
        const frontStudent = students.shift();
        students.push(frontStudent);
      }
  
      // Check if there are no more students who prefer the remaining sandwiches
      if (preferenceCount[sandwiches[0]] === 0) {
        break;
      }
    }
  
    // Return the number of students unable to eat
    return n - servedCount;
  }
  
  // Test cases
  console.log(studentsCount([1, 1, 0, 0], [0, 1, 0, 1])); // Output: 0
  console.log(studentsCount([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // Output: 3


//// Question--4 ////

class RecentCounter {
    constructor() {
      this.requests = [];
    }
  
    ping(t) {
      // Add the new request to the requests array
      this.requests.push(t);
  
      // Remove requests that are outside the time range [t - 3000, t]
      while (this.requests[0] < t - 3000) {
        this.requests.shift();
      }
  
      // Return the number of requests in the updated time range
      return this.requests.length;
    }
  }
  
  // Test case
  const recentCounter = new RecentCounter();
  console.log(recentCounter.ping(1));    // Output: 1
  console.log(recentCounter.ping(100));  // Output: 2
  console.log(recentCounter.ping(3001)); // Output: 3
  console.log(recentCounter.ping(3002)); // Output: 3


//// Question--5 ////

function findWinner(n, k) {
    const friends = Array.from({ length: n }, (_, i) => i + 1);
    let currentPosition = 0;
  
    while (friends.length > 1) {
      currentPosition = (currentPosition + k - 1) % friends.length;
      friends.splice(currentPosition, 1);
    }
  
    return friends[0];
  }
  
  // Test cases
  console.log(findWinner(5, 2)); // Output: 3
  console.log(findWinner(6, 5)); // Output: 1
  

//// Question--6 ////

function deckRevealedIncreasing(deck) {
    const n = deck.length;
    deck.sort((a, b) => a - b); // Sort the deck in increasing order
    const result = [];
    const queue = [];
  
    for (let i = 0; i < n; i++) {
      queue.push(i); // Initialize the queue with indices
    }
  
    while (queue.length > 0) {
      result.push(deck[queue.shift()]); // Reveal the top card from the queue
      if (queue.length > 0) {
        queue.push(queue.shift()); // Move the next top card to the bottom
      }
    }
  
    return result;
  }
  
  // Test cases
  console.log(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7])); // Output: [2, 13, 3, 11, 5, 17, 7]
  console.log(deckRevealedIncreasing([1, 1000])); // Output: [1, 1000]


//// Question--7 ////

class FrontMiddleBackQueue {
    constructor() {
      this.front = [];
      this.back = [];
    }
  
    pushFront(val) {
      this.front.unshift(val);
      this.balance();
    }
  
    pushMiddle(val) {
      const middle = Math.floor(this.size() / 2);
      if (this.front.length <= this.back.length) {
        this.front.splice(middle, 0, val);
      } else {
        this.back.splice(middle, 0, val);
      }
      this.balance();
    }
  
    pushBack(val) {
      this.back.push(val);
      this.balance();
    }
  
    popFront() {
      if (this.isEmpty()) {
        return 1;
      }
      if (this.front.length === 0) {
        this.front = this.back.reverse();
        this.back = [];
      }
      return this.front.shift();
    }
  
    popMiddle() {
      if (this.isEmpty()) {
        return 1;
      }
      if (this.front.length > this.back.length) {
        return this.front.splice(Math.floor(this.front.length / 2), 1)[0];
      } else {
        return this.back.splice(Math.floor(this.back.length / 2), 1)[0];
      }
    }
  
    popBack() {
      if (this.isEmpty()) {
        return 1;
      }
      if (this.back.length === 0) {
        this.back = this.front.reverse();
        this.front = [];
      }
      return this.back.pop();
    }
  
    size() {
      return this.front.length + this.back.length;
    }
  
    isEmpty() {
      return this.size() === 0;
    }
  
    balance() {
      if (this.front.length > this.back.length + 1) {
        this.back.unshift(this.front.pop());
      } else if (this.back.length > this.front.length) {
        this.front.push(this.back.shift());
      }
    }
  }
  
  // Test case
  const q = new FrontMiddleBackQueue();
  console.log(q.pushFront(1)); // Output: null
  console.log(q.pushBack(2)); // Output: null
  console.log(q.pushMiddle(3)); // Output: null
  console.log(q.pushMiddle(4)); // Output: null
  console.log(q.popFront()); // Output: 1
  console.log(q.popMiddle()); // Output: 3
  console.log(q.popMiddle()); // Output: 4
  console.log(q.popBack()); // Output: 2
  console.log(q.popFront()); // Output: -1
  

//// Question--8 ////

class DataStream {
    constructor(value, k) {
      this.value = value;
      this.k = k;
      this.buffer = new Array(k);
      this.count = 0;
      this.idx = 0;
    }
  
    consec(num) {
      this.buffer[this.idx] = num;
      this.idx = (this.idx + 1) % this.k;
      this.count = Math.min(this.count + 1, this.k);
  
      if (this.count < this.k) {
        return false;
      }
  
      for (let i = 0; i < this.k; i++) {
        if (this.buffer[i] !== this.value) {
          return false;
        }
      }
  
      return true;
    }
  }
  
  // Test case
  const dataStream = new DataStream(4, 3);
  console.log(dataStream.consec(4)); // Output: false
  console.log(dataStream.consec(4)); // Output: false
  console.log(dataStream.consec(4)); // Output: true
  console.log(dataStream.consec(3)); // Output: false
  


 /////////////////////////////////// END /////////////////////////////////////////
 
 

