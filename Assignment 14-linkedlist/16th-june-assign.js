////// SOLUTIONS OF THE ASSIGNMENT QUESTIONS--14 ///////

//// Question--1 ////

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function detectAndRemoveLoop(head) {
    let slowPtr = head;
    let fastPtr = head;
    let hasLoop = false;
  
    // Detect the loop
    while (fastPtr && fastPtr.next) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
      if (slowPtr === fastPtr) {
        hasLoop = true;
        break;
      }
    }
  
    // Remove the loop if present
    if (hasLoop) {
      slowPtr = head;
      while (slowPtr !== fastPtr.next) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next;
      }
      fastPtr.next = null;
    }
  
    return head;
  }
  
  // Example usage
  const head = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  
  head.next = node2;
  node2.next = node3;
  node3.next = node4;
  
  // Creating a loop
  node4.next = node2;
  
  const result = detectAndRemoveLoop(head);
  console.log(result); // Output: 1


//// Question--2 ////

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function addOne(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
  
    let lastNonNineNode = dummy;
    let current = head;
  
    // Traverse the linked list to find the last non-nine node
    while (current !== null) {
      if (current.val !== 9) {
        lastNonNineNode = current;
      }
      current = current.next;
    }
  
    // Increment the last non-nine node by 1
    lastNonNineNode.val += 1;
  
    // Set all the following nodes to 0
    current = lastNonNineNode.next;
    while (current !== null) {
      current.val = 0;
      current = current.next;
    }
  
    // If the dummy node's value is 1, set it as the new head
    if (dummy.val === 1) {
      return dummy;
    }
  
    // Otherwise, return the original head
    return dummy.next;
  }
  
  // Helper function to convert an array to a linked list
  function arrayToLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    return head;
  }
  
  // Helper function to convert a linked list to an array
  function linkedListToArray(head) {
    let arr = [];
    let current = head;
    while (current !== null) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
  
  // Example usage
  const input1 = [4, 5, 6];
  const linkedList1 = arrayToLinkedList(input1);
  const result1 = addOne(linkedList1);
  console.log(linkedListToArray(result1)); // Output: [4, 5, 7]
  
  const input2 = [1, 2, 3];
  const linkedList2 = arrayToLinkedList(input2);
  const result2 = addOne(linkedList2);
  console.log(linkedListToArray(result2)); // Output: [1, 2, 4]


//// Question--3 ////

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.bottom = null;
    }
  }
  
  function mergeSortedListsElement(list1, list2) {
    const dummy = new Node(0);
    let current = dummy;
  
    while (list1 !== null && list2 !== null) {
      if (list1.data < list2.data) {
        current.bottom = list1;
        list1 = list1.bottom;
      } else {
        current.bottom = list2;
        list2 = list2.bottom;
      }
      current = current.bottom;
    }
  
    if (list1 !== null) {
      current.bottom = list1;
    } else {
      current.bottom = list2;
    }
  
    return dummy.bottom;
  }
  
  function flattenLinkedList(head) {
    if (head === null || head.next === null) {
      return head;
    }
  
    head.next = flattenLinkedList(head.next);
    head = mergeSortedListsElement(head, head.next);
  
    return head;
  }
  
  // Example usage
  const node1 = new Node(5);
  const node2 = new Node(10);
  const node3 = new Node(19);
  const node4 = new Node(28);
  const node5 = new Node(7);
  const node6 = new Node(20);
  const node7 = new Node(22);
  const node8 = new Node(35);
  const node9 = new Node(8);
  const node10 = new Node(50);
  const node11 = new Node(40);
  const node12 = new Node(30);
  const node13 = new Node(45);
  
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node1.bottom = node5;
  node2.bottom = node6;
  node3.bottom = node7;
  node4.bottom = node8;
  node5.bottom = node9;
  node6.bottom = node10;
  node7.bottom = node11;
  node9.bottom = node12;
  node11.bottom = node13;
  
  const result = flattenLinkedList(node1);
  
  // Print the flattened list using the bottom pointer
  let current = result;
  while (current !== null) {
    console.log(current.data);
    current = current.bottom;
    ///Output: 5,7,8,10,19,20,22,28,30,35,40,45,50


//// Question--4 ////

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.random = null;
    }
  }
  
  function copyRandomList(head) {
    if (head === null) {
      return null;
    }
  
    const map = new Map();
  
    // Create a copy of each node and store the mapping
    let current = head;
    while (current !== null) {
      const newNode = new Node(current.val);
      map.set(current, newNode);
      current = current.next;
    }
  
    // Set the next and random pointers of the copied nodes
    current = head;
    while (current !== null) {
      const copiedNode = map.get(current);
      copiedNode.next = map.get(current.next);
      copiedNode.random = map.get(current.random);
      current = current.next;
    }
  
    return map.get(head);
  }
  
  // Example usage
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  
  node1.random = node2;
  node2.random = node4;
  
  const result = copyRandomList(node1);
  console.log(result);


//// Question--5 ////

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function oddEvenList(head) {
    if (head === null || head.next === null) {
      return head;
    }
  
    let odd = head;
    let even = head.next;
    const oddHead = odd;
    const evenHead = even;
  
    while (even !== null && even.next !== null) {
      odd.next = even.next;
      odd = odd.next;
      even.next = odd.next;
      even = even.next;
    }
  
    odd.next = evenHead;
  
    return oddHead;
  }
  
  // Example usage
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(3);
  const node4 = new ListNode(4);
  const node5 = new ListNode(5);
  
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  
  const result = oddEvenList(node1);
  let current = result;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }


//// Question--6 ////

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function leftShiftLinkedList(head, k) {
    if (head === null || k === 0) {
      return head;
    }
  
    // Find the length of the linked list and the last node
    let length = 0;
    let lastNode = null;
    let current = head;
    while (current !== null) {
      length++;
      lastNode = current;
      current = current.next;
    }
  
    // Calculate the actual value of k
    k = k % length;
  
    if (k === 0) {
      return head;
    }
  
    // Find the new head of the shifted linked list
    let newHead = head;
    for (let i = 1; i < k; i++) {
      newHead = newHead.next;
    }
  
    // Find the node just before the new head
    let prev = head;
    while (prev.next !== newHead) {
      prev = prev.next;
    }
  
    // Set the next pointer of the last node to the original head
    lastNode.next = head;
  
    // Set the next pointer of the node just before the new head to null
    prev.next = null;
  
    return newHead;
  }
  
  // Example usage
  const node1 = new ListNode(2);
  const node2 = new ListNode(4);
  const node3 = new ListNode(7);
  const node4 = new ListNode(8);
  const node5 = new ListNode(9);
  
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  
  const result = leftShiftLinkedList(node1, 3);
  let current = result;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }


//// Question--7 ////

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function nextLargerNodes(head) {
    const arr = [];
    let current = head;
    while (current !== null) {
      arr.push(current.val);
      current = current.next;
    }
  
    const stack = [];
    const result = new Array(arr.length).fill(0);
  
    for (let i = 0; i < arr.length; i++) {
      while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
        const top = stack.pop();
        result[top] = arr[i];
      }
      stack.push(i);
    }
  
    return result;
  }
  
  // Example usage
  const node1 = new ListNode(2);
  const node2 = new ListNode(1);
  const node3 = new ListNode(5);
  
  node1.next = node2;
  node2.next = node3;
  
  const result = nextLargerNodes(node1);
  console.log(result);


//// Question--8 ////

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function removeZeroSumSublists(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
  
    let prefixSum = 0;
    const sumMap = new Map();
    sumMap.set(0, dummy);
  
    let current = dummy.next;
  
    while (current !== null) {
      prefixSum += current.val;
  
      if (sumMap.has(prefixSum)) {
        const prev = sumMap.get(prefixSum).next;
        let removeSum = prefixSum + prev.val;
  
        while (prev !== current) {
          sumMap.delete(removeSum);
          prev = prev.next;
          removeSum += prev.val;
        }
  
        sumMap.get(prefixSum).next = current.next;
      } else {
        sumMap.set(prefixSum, current);
      }
  
      current = current.next;
    }
  
    return dummy.next;
  }
  
  // Example usage
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(-3);
  const node4 = new ListNode(3);
  const node5 = new ListNode(1);
  
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  
  const result = removeZeroSumSublists(node1);
  let current = result;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }





///////////////////////END////////////////////////////////////////









  
  