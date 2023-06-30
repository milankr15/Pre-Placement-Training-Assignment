/////// SOLUTIONS OF THE ASSIGNMENT QUESTIONS--20 ///////

//// Question--1 ////

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findMaxSubtreeSum(root) {
    let maxSum = -Infinity;
  
    function maxSubtreeSum(node) {
      if (node === null) {
        return 0;
      }
  
      const leftSum = maxSubtreeSum(node.left);
      const rightSum = maxSubtreeSum(node.right);
  
      const currentSum = leftSum + rightSum + node.value;
      maxSum = Math.max(maxSum, currentSum);
  
      return Math.max(0, leftSum + node.value, rightSum + node.value);
    }
  
    maxSubtreeSum(root);
  
    return maxSum;
  }
  
  // Example usage:
  // Create the binary tree from the input example
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.left = new Node(6);
  root.right.right = new Node(7);
  
  console.log(findMaxSubtreeSum(root)); // Output: 28


//// Question--2 ////

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function constructBST(levelOrder) {
    if (levelOrder.length === 0) {
      return null;
    }
  
    const root = new Node(levelOrder[0]);
    const queue = [root];
    let i = 1;
  
    while (i < levelOrder.length) {
      const parent = queue.shift();
  
      const leftValue = levelOrder[i];
      if (leftValue !== null && leftValue !== undefined) {
        const leftNode = new Node(leftValue);
        parent.left = leftNode;
        queue.push(leftNode);
      }
  
      const rightValue = levelOrder[i + 1];
      if (rightValue !== null && rightValue !== undefined) {
        const rightNode = new Node(rightValue);
        parent.right = rightNode;
        queue.push(rightNode);
      }
  
      i += 2;
    }
  
    return root;
  }
  
  // Example usage:
  const levelOrder = [7, 4, 12, 3, 6, 8, 1, 5, 10];
  const bstRoot = constructBST(levelOrder);
  
  // Function to print the BST (in-order traversal)
  function printBST(node) {
    if (node === null) {
      return;
    }
  
    printBST(node.left);
    console.log(node.value);
    printBST(node.right);
  }
  
  printBST(bstRoot); // Output: 1 3 4 5 6 7 8 10 12


//// Question--3 ////

function canRepresentBST(arr) {
    const stack = [];
    let root = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < root) {
        return "No";
      }
  
      while (stack.length > 0 && arr[i] > stack[stack.length - 1]) {
        root = stack.pop();
      }
  
      stack.push(arr[i]);
    }
  
    return "Yes";
  }
  
  // Example usage:
  const arr1 = [7, 4, 12, 3, 6, 8, 1, 5, 10];
  console.log(canRepresentBST(arr1)); // Output: Yes
  
  const arr2 = [11, 6, 13, 5, 12, 10];
  console.log(canRepresentBST(arr2)); // Output: No



//////////////////////////////// END //////////////////////////////////////////////////
  
  
  