/////// SOLUTIONS OF THE ASSIGNMENT QUESTIONS--23 ///////

//// Question--1 ////


function depthCalculate(preorder) {
    let depth = 0;
    let count = 0;
  
    for (let i = 0; i < preorder.length; i++) {
      if (preorder[i] === 'n') {
        count++;
      } else if (preorder[i] === 'l') {
        count--;
      }
  
      // Update the depth if the current count is greater than the depth
      depth = Math.max(depth, count);
    }
  
    return depth;
  }
  
  // Example usage:
  console.log(depthCalculate('nlnll')); // Output: 2
  console.log(depthCalculate('nlnnlll')); // Output: 3


//// Question--2 ////
  
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  // Function to print the left view of a binary tree
  function printLeftView(root) {
    if (!root) {
      return;
    }
  
    const queue = [];
    queue.push({ node: root, level: 0 });
    let currentLevel = -1;
  
    while (queue.length > 0) {
      const { node, level } = queue.shift();
  
      if (level > currentLevel) {
        console.log(node.val);
        currentLevel = level;
      }
  
      if (node.left) {
        queue.push({ node: node.left, level: level + 1 });
      }
  
      if (node.right) {
        queue.push({ node: node.right, level: level + 1 });
      }
    }
  }
  
  // Example usage:
  // Create a binary tree
  const root = new TreeNode(4);
  root.left = new TreeNode(5);
  root.right = new TreeNode(2);
  root.right.left = new TreeNode(3);
  root.right.right = new TreeNode(1);
  root.right.left.left = new TreeNode(6);
  root.right.left.right = new TreeNode(7);
  
  // Print the left view of the binary tree
  printLeftView(root);


//// Question--3 ////

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  // Function to print the right view of a binary tree
  function printRightView(root) {
    if (!root) {
      return;
    }
  
    const queue = [];
    queue.push({ node: root, level: 0 });
    let currentLevel = -1;
  
    while (queue.length > 0) {
      const { node, level } = queue.shift();
  
      if (level > currentLevel) {
        console.log(node.val);
        currentLevel = level;
      }
  
      if (node.right) {
        queue.push({ node: node.right, level: level + 1 });
      }
  
      if (node.left) {
        queue.push({ node: node.left, level: level + 1 });
      }
    }
  }
  
  // Example usage:
  // Create a binary tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  root.right.right.right = new TreeNode(8);
  
  // Print the right view of the binary tree
  printRightView(root);


//// Question--4 ////


class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  // Function to print the bottom view of a binary tree
  function printBottomView(root) {
    if (!root) {
      return;
    }
  
    const queue = [];
    const map = new Map();
  
    // Initialize the queue with the root and its horizontal distance
    queue.push({ node: root, hd: 0 });
  
    while (queue.length > 0) {
      const { node, hd } = queue.shift();
  
      // Update the map with the latest node at the current horizontal distance
      map.set(hd, node.val);
  
      if (node.left) {
        queue.push({ node: node.left, hd: hd - 1 });
      }
  
      if (node.right) {
        queue.push({ node: node.right, hd: hd + 1 });
      }
    }
  
    // Print the nodes from the map in the order of their horizontal distance
    for (const [_, value] of map) {
      console.log(value);
    }
  }
  
  // Example usage:
  // Create a binary tree
  const root = new TreeNode(20);
  root.left = new TreeNode(8);
  root.right = new TreeNode(22);
  root.left.left = new TreeNode(5);
  root.left.right = new TreeNode(3);
  root.right.right = new TreeNode(25);
  root.left.right.left = new TreeNode(10);
  root.left.right.right = new TreeNode(14);
  
  // Print the bottom view of the binary tree
  printBottomView(root);

  
  
  