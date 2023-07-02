/////// SOLUTIONS OF THE ASSIGNMENT QUESTIONS--22 ///////

//// Question--1 ////


class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  
  function convertToDLL(root) {
    if (!root) {
      return null;
    }
  
    // Initialize the previous pointer as null
    let prev = null;
  
    // Recursively convert the left subtree and update the previous pointer
    const left = convertToDLL(root.left);
    if (left) {
      left.right = root;
      root.left = left;
      prev = root;
    } else {
      prev = root;
    }
  
    // Recursively convert the right subtree and update the previous pointer
    const right = convertToDLL(root.right);
    if (right) {
      right.left = prev;
      prev.right = right;
    }
  
    // Return the head of the DLL
    return left ? left : root;
  }
  
  // Example usage:
  // Create a binary tree
  const root = new TreeNode(25);
  root.left = new TreeNode(12);
  root.right = new TreeNode(30);
  root.left.left = new TreeNode(10);
  root.left.right = new TreeNode(36);
  
  // Convert the binary tree to a DLL
  const head = convertToDLL(root);
  
  // Print the DLL (inorder traversal)
  let current = head;
  let result = '';
  while (current) {
    result += current.val + ' ';
    current = current.right;
  }
  console.log(result.trim()); // Output: 10 25 30


//// Question--2 ////

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  // Function to flip the binary tree
  function flipBinaryTree(root) {
    // Base case: If the tree is empty or a leaf node, return the node itself
    if (!root || (!root.left && !root.right)) {
      return root;
    }
  
    // Recursively flip the left and right subtrees
    const flippedLeft = flipBinaryTree(root.left);
    const flippedRight = flipBinaryTree(root.right);
  
    // Flip the current node
    root.left = flippedRight;
    root.right = flippedLeft;
  
    return root;
  }
  
  // Function to print the flipped binary tree (preorder traversal)
  function printFlippedTree(root) {
    if (!root) {
      return;
    }
  
    console.log(root.val);
    printFlippedTree(root.left);
    printFlippedTree(root.right);
  }
  
  // Example usage:
  // Create a binary tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  // Flip the binary tree
  const flippedTree = flipBinaryTree(root);
  
  
  printFlippedTree(flippedTree);


//// Question--3 ////

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  
  function printRootToLeafPaths(root) {
    if (!root) {
      return;
    }
  
    // Create an empty stack to store node and path pairs
    const stack = [];
    stack.push({ node: root, path: root.val.toString() });
  
    // Perform iterative depth-first traversal
    while (stack.length > 0) {
      const { node, path } = stack.pop();
  
      // If the current node is a leaf, print the path
      if (!node.left && !node.right) {
        console.log(path);
      }
  
      // Push the right child to the stack if it exists
      if (node.right) {
        stack.push({
          node: node.right,
          path: path + '->' + node.right.val.toString(),
        });
      }
  
      // Push the left child to the stack if it exists
      if (node.left) {
        stack.push({
          node: node.left,
          path: path + '->' + node.left.val.toString(),
        });
      }
    }
  }
  
  // Example usage:
  // Create a binary tree
  const root = new TreeNode(6);
  root.left = new TreeNode(3);
  root.right = new TreeNode(5);
  root.left.left = new TreeNode(2);
  root.left.right = new TreeNode(5);
  root.right.right = new TreeNode(4);
  root.left.right.left = new TreeNode(7);
  root.left.right.right = new TreeNode(4);
  
  // Print all root-to-leaf paths
  printRootToLeafPaths(root);


//// Question--4 ////

function checkSameTree(preorder, inorder, postorder) {
    if (preorder.length === 0 || inorder.length === 0 || postorder.length === 0) {
      return false;
    }
  
    if (preorder.length !== inorder.length || inorder.length !== postorder.length) {
      return false;
    }
  
    if (preorder.length === 1) {
      return true;
    }
  
    // Check if the first element of preorder matches the first element of inorder
    if (preorder[0] !== inorder[0]) {
      return false;
    }
  
    // Divide the traversals into left and right subtrees
    const root = preorder[0];
    const rootIndex = inorder.indexOf(root);
  
    const leftInorder = inorder.slice(0, rootIndex);
    const rightInorder = inorder.slice(rootIndex + 1);
  
    const leftPreorder = preorder.slice(1, rootIndex + 1);
    const rightPreorder = preorder.slice(rootIndex + 1);
  
    const leftPostorder = postorder.slice(0, rootIndex);
    const rightPostorder = postorder.slice(rootIndex, -1);
  
    // Recursively check for left and right subtrees
    const leftSubtree = checkSameTree(leftPreorder, leftInorder, leftPostorder);
    const rightSubtree = checkSameTree(rightPreorder, rightInorder, rightPostorder);
  
    return leftSubtree && rightSubtree;
  }
  
  // Example usage:
  const inorder = [4, 2, 5, 1, 3];
  const preorder = [1, 2, 4, 5, 3];
  const postorder = [4, 5, 2, 3, 1];
  
  console.log(checkSameTree(preorder, inorder, postorder)); // Output: true
  
  const inorder2 = [4, 2, 5, 1, 3];
  const preorder2 = [1, 5, 4, 2, 3];
  const postorder2 = [4, 1, 2, 3, 5];
  
  console.log(checkSameTree(preorder2, inorder2, postorder2)); // Output: false
  
  


 ////////////////////////////////// END ////////////////////////////////////////////////// 
  