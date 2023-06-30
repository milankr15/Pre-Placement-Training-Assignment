/////// SOLUTIONS OF THE ASSIGNMENT QUESTIONS--21 ///////

//// Question--1 ////

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function convertToBST(root) {
    // Step 1: Perform in-order traversal to obtain sorted values
    const sortedValues = [];
    inorderTraversal(root, sortedValues);
  
    // Step 2: Sort the values in ascending order
    sortedValues.sort((a, b) => a - b);
  
    // Step 4: Perform in-order traversal to replace node values with sorted values
    const index = { value: 0 };
    inorderReplace(root, sortedValues, index);
  
    return root;
  }
  
  function inorderTraversal(node, values) {
    if (node === null) {
      return;
    }
  
    inorderTraversal(node.left, values);
    values.push(node.value);
    inorderTraversal(node.right, values);
  }
  
  function inorderReplace(node, sortedValues, index) {
    if (node === null) {
      return;
    }
  
    inorderReplace(node.left, sortedValues, index);
    node.value = sortedValues[index.value];
    index.value++;
    inorderReplace(node.right, sortedValues, index);
  }
  
  // Example usage:
  const root = new TreeNode(10);
  root.left = new TreeNode(2);
  root.right = new TreeNode(7);
  root.left.left = new TreeNode(8);
  root.left.right = new TreeNode(4);
  
  const bstRoot = convertToBST(root);
  
  // Function to print the BST (in-order traversal)
  function printBST(node) {
    if (node === null) {
      return;
    }
  
    printBST(node.left);
    console.log(node.value);
    printBST(node.right);
  }
  
  printBST(bstRoot); // Output: 2 4 7 8 10


//// Question--2 ////

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findDistanceBST(root, node1, node2) {
    // Step 1: Find node1 and node2 in the BST
    const bstNode1 = findNode(root, node1);
    const bstNode2 = findNode(root, node2);
  
    // Step 2: Find the lowest common ancestor (LCA)
    const lca = findLCA(root, bstNode1, bstNode2);
  
    // Step 3: Calculate the distance from LCA to node1 and node2
    const distance1 = findDistance(lca, bstNode1);
    const distance2 = findDistance(lca, bstNode2);
  
    // Step 4: Return the sum of distances
    return distance1 + distance2;
  }
  
  function findNode(node, value) {
    if (node === null || node.value === value) {
      return node;
    }
  
    if (value < node.value) {
      return findNode(node.left, value);
    }
  
    return findNode(node.right, value);
  }
  
  function findLCA(node, bstNode1, bstNode2) {
    if (node === null || bstNode1 === null || bstNode2 === null) {
      return null;
    }
  
    if (bstNode1.value < node.value && bstNode2.value < node.value) {
      return findLCA(node.left, bstNode1, bstNode2);
    }
  
    if (bstNode1.value > node.value && bstNode2.value > node.value) {
      return findLCA(node.right, bstNode1, bstNode2);
    }
  
    return node;
  }
  
  function findDistance(node, target) {
    if (node === null) {
      return 0;
    }
  
    if (node.value === target.value) {
      return 0;
    }
  
    if (target.value < node.value) {
      return 1 + findDistance(node.left, target);
    }
  
    return 1 + findDistance(node.right, target);
  }
  
  // Example usage:
  const root = new TreeNode(8);
  root.left = new TreeNode(3);
  root.right = new TreeNode(10);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(6);
  root.left.right.left = new TreeNode(4);
  root.left.right.right = new TreeNode(7);
  root.right.right = new TreeNode(14);
  root.right.right.left =


//// Question--3 ////

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function convertToDoublyLinkedList(root) {
    if (root === null) {
      return null;
    }
  
    let head = null;
    let prev = null;
  
    // Perform in-order traversal
    inorderTraversal(root);
  
    // Helper function for in-order traversal
    function inorderTraversal(node) {
      if (node === null) {
        return;
      }
  
      // Traverse left subtree
      inorderTraversal(node.left);
  
      if (prev === null) {
        // First node encountered during traversal
        head = node;
      } else {
        // Update pointers
        prev.right = node;
        node.left = prev;
      }
  
      prev = node;
  
      // Traverse right subtree
      inorderTraversal(node.right);
    }
  
    // Set the right pointer of the last node to null
    prev.right = null;
  
    return head;
  }
  
  // Example usage:
  const root = new TreeNode(10);
  root.left = new TreeNode(5);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(30);
  root.right.right = new TreeNode(35);
  
  const head = convertToDoublyLinkedList(root);
  
  // Function to print the doubly linked list (forward traversal)
  function printDoublyLinkedList(head) {
    let current = head;
    let list = '';
  
    while (current !== null) {
      list += current.value + ' ';
      current = current.right;
    }
  
    console.log(list.trim());
  }
  
  printDoublyLinkedList(head); // Output: 5 10 30 20 35


//// Question--4 ////

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.next = null; // Pointer to the next node at the same level
    }
  }
  
  function connectNodesAtSameLevel(root) {
    if (root === null) {
      return;
    }
  
    // Use a queue to perform level order traversal
    const queue = [];
    queue.push(root);
  
    while (queue.length > 0) {
      const levelSize = queue.length;
  
      // Connect nodes at the same level
      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift();
  
        // Connect the current node to the next node in the queue
        if (i < levelSize - 1) {
          currentNode.next = queue[0];
        }
  
        // Enqueue the left and right children of the current node
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
    }
  
    return root;
  }
  
  // Example usage:
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  
  const connectedRoot = connectNodesAtSameLevel(root);
  
  // Function to print the connections between nodes at the same level
  function printConnections(root) {
    let current = root;
  
    while (current !== null) {
      let node = current;
      let connections = '';
  
      while (node !== null) {
        if (node.next !== null) {
          connections += node.value + ' -> ';
        } else {
          connections += node.value + ' -> -1';
        }
  
        node = node.next;
      }
  
      console.log(connections);
      current = current.left;
    }
  }
  
  printConnections(connectedRoot);
  /// Output: 1 -> -1
///           2 -> 3 -> -1
///           4 -> 5 -> 6 -> 7 -> -1



  
//////////////////////////////// END //////////////////////////////////////
  