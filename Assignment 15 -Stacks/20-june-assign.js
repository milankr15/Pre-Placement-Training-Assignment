////// SOLUTIONS OF THE ASSIGNMENT QUESTIONS--15 ///////

//// Question--1 ////

function findNextGreaterElements(arr) {
    const stack = [];
    const result = [];
  
    // Start from the right side of the array
    for (let i = arr.length - 1; i >= 0; i--) {
      // Pop elements from the stack until a greater element is found or the stack becomes empty
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
  
      // If a greater element is found, it becomes the next greater element
      if (stack.length > 0) {
        result.unshift(stack[stack.length - 1]);
      } else {
        result.unshift(-1);
      }
  
      // Push the current element into the stack
      stack.push(arr[i]);
    }
  
    return result;
  }
  
  // Example usage 1:
  const arr = [1, 3, 2, 4];
  const result = findNextGreaterElements(arr);
  console.log(result); // Output: [3, 4, 4, -1]
  // Example usage 2:
  const arr = [6, 8, 0, 1, 3];
  const nextGreaterElements = findNextGreaterElements(arr);
  console.log(nextGreaterElements); // Output : [8, -1, 1, 3, -1 ]


//// Question--2 ////

function nearestSmallerNumbersFind(a) {
    const n = a.length;
    const result = [];
  
    // Create a stack to store the indices of elements
    const stack = [];
  
    
    for (let i = 0; i < n; i++) {
      // Pop elements from the stack that are greater than or equal to the current element
      while (stack.length > 0 && a[stack[stack.length - 1]] >= a[i]) {
        stack.pop();
      }
  
      // If the stack is empty, there is no smaller element on the left
      if (stack.length === 0) {
        result.push(-1);
      } else {
        
        result.push(a[stack[stack.length - 1]]);
      }
  
      // Push the current element index to the stack
      stack.push(i);
    }
  
    return result;
  }
  
  // Example usage
  const a1 = [1, 6, 2];
  const nearestSmaller1 = nearestSmallerNumbersFind(a1);
  console.log(nearestSmaller1); // Output: [ -1, 1, 1 ]
 
  const a2 = [1, 5, 0, 3, 4, 5];
  const nearestSmaller2 = nearestSmallerNumbersFind(a2);
  console.log(nearestSmaller2); // Output: [ -1, 1, -1, 0, 3, 4]


//// Question--3 ////

class Stack {
    constructor() {
      this.q1 = [];
      this.q2 = [];
    }
  
    push(value) {
      // Move all elements from q1 to q2
      while (this.q1.length > 0) {
        this.q2.push(this.q1.shift());
      }
  
      // Add the new element to q1
      this.q1.push(value);
  
      // Move all elements back to q1
      while (this.q2.length > 0) {
        this.q1.push(this.q2.shift());
      }
    }
  
    pop() {
      // If q1 is empty, return -1
      if (this.q1.length === 0) {
        return -1;
      }
  
      // Remove and return the top element from q1
      return this.q1.shift();
    }
  }
  
  // Example usage 1
  const stack = new Stack();
  
  stack.push(2);
  stack.push(3);
  console.log(stack.pop()); // Output: 3
  
  stack.push(4);
  console.log(stack.pop()); // Output: 4
 // Example usage 2
 const stack = new Stack();
 stack.push(2);
 console.log(stack.pop()); // Output: 2
 console.log(stack.pop()); // Output: -1
 stack.push(3);
 console.log(stack.pop()); // Output: 3


//// Question--4 ////

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return -1;
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    reverse() {
      if (!this.isEmpty()) {
        // Remove the top element from the stack
        const temp = this.pop();
        // Reverse the remaining stack
        this.reverse();
        // Insert the removed element at the bottom of the reversed stack
        this.insertAtBottom(temp);
      }
    }
  
    insertAtBottom(element) {
      if (this.isEmpty()) {
        this.push(element);
      } else {
        // Remove all elements from the stack and store them in the function call stack
        const temp = this.pop();
        // Recursively insert the element at the bottom of the stack
        this.insertAtBottom(element);
        // Push all the previously removed elements back onto the stack
        this.push(temp);
      }
    }
  
    printStack() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      console.log(str);
    }
  }
  
  // Example usage
  const stack = new Stack();
  stack.push(3);
  stack.push(2);
  stack.push(1);
  stack.push(7);
  stack.push(6);
  
  console.log("Original Stack:");
  stack.printStack(); //Output: 3 2 1 7 6 
  
  console.log("Reversed Stack:");
  stack.reverse();
  stack.printStack(); //Output: 6 7 1 2 3 


//// Question--5 ////

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return -1;
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    reverseString(str) {
      // Push each character of the string onto the stack
      for (let i = 0; i < str.length; i++) {
        this.push(str[i]);
      }
  
      let reversedStr = "";
  
      // Pop each character from the stack to construct the reversed string
      while (!this.isEmpty()) {
        reversedStr += this.pop();
      }
  
      return reversedStr;
    }
  }
  
  // Example usage
  const stack = new Stack();
  const S = "GeeksforGeeks";
  const reversedString = stack.reverseString(S);
  console.log(reversedString); //Output : skeeGrofskeeG


//// Question--6 ////

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return -1;
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    evaluatePostfix(expression) {
      for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
  
        // If the character is an operand, push it to the stack
        if (!this.isOperator(char)) {
          this.push(parseInt(char));
        } else {
          // If the character is an operator, pop two operands from the stack,
          // perform the operation, and push the result back to the stack
          const operand2 = this.pop();
          const operand1 = this.pop();
          const result = this.performOperation(char, operand1, operand2);
          this.push(result);
        }
      }
  
      // The final result will be the only element left in the stack
      return this.pop();
    }
  
    isOperator(char) {
      return char === "+" || char === "-" || char === "*" || char === "/";
    }
  
    performOperation(operator, operand1, operand2) {
      switch (operator) {
        case "+":
          return operand1 + operand2;
        case "-":
          return operand1 - operand2;
        case "*":
          return operand1 * operand2;
        case "/":
          return operand1 / operand2;
      }
    }
  }
  
  // Example usage
  const stack = new Stack();
  const S1 = "231*+9-";
  const result1 = stack.evaluatePostfix(S1);
  console.log(result1); // Output: -4
  
  const S2 = "123+*8-";
  const result2 = stack.evaluatePostfix(S2);
  console.log(result2); // Output: -3


//// Question--7 ////

class StackMin {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(val) {
      this.stack.push(val);
      // Update the minimum stack
      if (this.minStack.length === 0 || val <= this.getMin()) {
        this.minStack.push(val);
      }
    }
  
    pop() {
      const poppedElement = this.stack.pop();
      // Update the minimum stack if the popped element is the minimum
      if (poppedElement === this.getMin()) {
        this.minStack.pop();
      }
    }
  
    top() {
      return this.stack[this.stack.length - 1];
    }
  
    getMin() {
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  // Example usage
  const minStack = new StackMin();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  console.log(minStack.getMin()); // Output: -3
  minStack.pop();
  console.log(minStack.top()); // Output: 0
  console.log(minStack.getMin()); // Output: -2


//// Question--8 ////

function waterTrap(height) {
    const n = height.length;
    if (n <= 2) {
      return 0;
    }
  
    let left = 0;
    let right = n - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0;
  
    while (left < right) {
      if (height[left] < height[right]) {
        if (height[left] >= leftMax) {
          leftMax = height[left];
        } else {
          water += leftMax - height[left];
        }
        left++;
      } else {
        if (height[right] >= rightMax) {
          rightMax = height[right];
        } else {
          water += rightMax - height[right];
        }
        right--;
      }
    }
  
    return water;
  }
  
  // Example usage
  const height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  console.log(waterTrap(height1)); // Output: 6
  
  const height2 = [4, 2, 0, 3, 2, 5];
  console.log(waterTrap(height2)); // Output: 9






//////////////////////////// END //////////////////////////////////////////////
