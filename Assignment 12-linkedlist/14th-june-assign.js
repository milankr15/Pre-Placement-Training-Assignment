////// SOLUTIONS OF THE ASSIGNMENT QUESTIONS--12 ///////

//// Question--1 ////

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

var deleteMiddleNode = function(head) {
    if (!head || !head.next) {
        return null; // Return null for empty or single-node list
    }

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    prev.next = slow.next; // Delete the middle node(s)

    return head;
};

// Function to convert an array to a linked list
function arrayToLinkedList(arr) {
    let head = null;
    let prev = null;

    for (let i = 0; i < arr.length; i++) {
        const node = new ListNode(arr[i]);
        if (!head) {
            head = node;
        } else {
            prev.next = node;
        }
        prev = node;
    }

    return head;
}

// Function to convert a linked list to an array
function linkedListToArray(head) {
    const result = [];
    let curr = head;

    while (curr) {
        result.push(curr.val);
        curr = curr.next;
    }

    return result;
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const linkedList1 = arrayToLinkedList(arr1);
console.log(linkedListToArray(deleteMiddleNode(linkedList1))); // Output: [1, 2, 4, 5]

const arr2 = [2, 4, 6, 7, 5, 1];
const linkedList2 = arrayToLinkedList(arr2);
console.log(linkedListToArray(deleteMiddleNode(linkedList2))); // Output: [2, 4, 6, 5, 1]


//// Question--2 ////

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var hasLoop = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true; // Loop detected
        }
    }

    return false; // No loop found
};

// Function to create a linked list with a loop
function createLinkedListWithLoop(arr, pos) {
    const head = new ListNode(arr[0]);
    let curr = head;
    let loopNode = null;

    for (let i = 1; i < arr.length; i++) {
        const newNode = new ListNode(arr[i]);
        curr.next = newNode;
        curr = newNode;

        if (i === pos) {
            loopNode = newNode;
        }
    }

    curr.next = loopNode; // Create a loop

    return head;
}

// Example usage:
const arr1 = [1, 3, 4];
const pos1 = 2;
const linkedList1 = createLinkedListWithLoop(arr1, pos1);
console.log(hasLoop(linkedList1)); // Output: true

const arr2 = [1, 8, 3, 4];
const pos2 = 0;
const linkedList2 = createLinkedListWithLoop(arr2, pos2);
console.log(hasLoop(linkedList2)); // Output: false


//// Question--3 ////

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function findNthFromEnd(head, n) {
    if (!head || n <= 0) {
      return -1; // Invalid input
    }
  
    let slow = head;
    let fast = head;
  
    // Move the fast pointer n nodes ahead of the slow pointer
    for (let i = 0; i < n; i++) {
      if (fast === null) {
        return -1; // n is greater than the number of nodes in the linked list
      }
      fast = fast.next;
    }
  
    // Move both pointers together until the fast pointer reaches the end
    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }
  
    // At this point, the slow pointer is at the Nth node from the end
    return slow.val;
  }
  
  // Example usage:
  // Create the linked list: 1->2->3->4->5->6->7->8->9
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);
  head.next.next.next.next.next = new ListNode(6);
  head.next.next.next.next.next.next = new ListNode(7);
  head.next.next.next.next.next.next.next = new ListNode(8);
  head.next.next.next.next.next.next.next.next = new ListNode(9);
  
  console.log(findNthFromEnd(head, 2)); // Output: 8
  
  // Create the linked list: 10->5->100->5
  const head2 = new ListNode(10);
  head2.next = new ListNode(5);
  head2.next.next = new ListNode(100);
  head2.next.next.next = new ListNode(5);
  
  console.log(findNthFromEnd(head2, 5)); // Output: -1


//// Question--4 ////

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function isPalindrome(head) {
    if (!head || !head.next) {
      // An empty list or a list with a single node is considered a palindrome
      return true;
    }
  
    let slow = head;
    let fast = head;
    let stack = [];
  
    // Traverse the list to find the middle node and push the first half of the characters onto a stack
    while (fast && fast.next) {
      stack.push(slow.val);
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // If the list has an odd number of nodes, skip the middle node
    if (fast !== null) {
      slow = slow.next;
    }
  
    // Compare the second half of the list with the characters popped from the stack
    while (slow) {
      if (slow.val !== stack.pop()) {
        return false;
      }
      slow = slow.next;
    }
  
    return true;
  }
  
  // Example usage:
  // Create the linked list: R->A->D->A->R->NULL
  const head = new ListNode('R');
  head.next = new ListNode('A');
  head.next.next = new ListNode('D');
  head.next.next.next = new ListNode('A');
  head.next.next.next.next = new ListNode('R');
  
  console.log(isPalindrome(head)); // Output: true
  
  // Create the linked list: C->O->D->E->NULL
  const head2 = new ListNode('C');
  head2.next = new ListNode('O');
  head2.next.next = new ListNode('D');
  head2.next.next.next = new ListNode('E');
  
  console.log(isPalindrome(head2)); // Output: false


//// Question--5 ////

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function detectAndRemoveLoop(head) {
    if (!head || !head.next) {
      return; // No loop present
    }
  
    let slow = head;
    let fast = head;
  
    // Find the meeting point of the slow and fast pointers (if there is a loop)
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        break;
      }
    }
  
    // If there is no loop, return
    if (slow !== fast) {
      return;
    }
  
    // Move one pointer to the head and keep the other at the meeting point
    slow = head;
    while (slow.next !== fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
  
    // Unlink the last node to remove the loop
    fast.next = null;
  }
  
  // Function to print the linked list (for testing purposes)
  function printLinkedList(head) {
    let curr = head;
    const values = [];
    while (curr) {
      values.push(curr.val);
      curr = curr.next;
    }
    console.log(values.join(" -> "));
  }
  
  // Example usage:
  // Create the linked list: 1 -> 3 -> 4 -> 3 (loop)
  const head = new ListNode(1);
  head.next = new ListNode(3);
  head.next.next = new ListNode(4);
  head.next.next.next = new ListNode(3);
  head.next.next.next.next = head.next; // Creating a loop
  
  detectAndRemoveLoop(head);
  printLinkedList(head); // Output: 1 -> 3 -> 4
  
  // Create the linked list: 1 -> 8 -> 3 -> 4
  const head2 = new ListNode(1);
  head2.next = new ListNode(8);
  head2.next.next = new ListNode(3);
  head2.next.next.next = new ListNode(4);
  
  detectAndRemoveLoop(head2);
  printLinkedList(head2); // Output: 1 -> 8 -> 3 -> 4
  
  // Create the linked list: 1 -> 2 -> 3 -> 4 -> 2 (loop)
  const head3 = new ListNode(1);
  head3.next = new ListNode(2);
  head3.next.next = new ListNode(3);
  head3.next.next.next = new ListNode(4);
  head3.next.next.next.next = head3.next; // Creating a loop
  
  detectAndRemoveLoop(head3);
  printLinkedList(head3); // Output: 1 -> 2 -> 3 -> 4


//// Question--6 ////

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function deleteNodes(head, M, N) {
    if (!head || N <= 0) {
      return head; // No deletion required
    }
  
    let curr = head;
    let count = 0;
  
    while (curr) {
      count++;
  
      if (count === M) {
        let temp = curr;
  
        // Skip N nodes
        for (let i = 0; i < N && temp; i++) {
          temp = temp.next;
        }
  
        if (temp) {
          curr.next = temp.next;
          curr = curr.next;
          count = 0; // Reset the count after deletion
        } else {
          curr.next = null; // Reached the end of the list, so remove the remaining nodes
        }
      } else {
        curr = curr.next;
      }
    }
  
    return head;
  }
  
  // Function to print the linked list (for testing purposes)
  function printLinkedList(head) {
    let curr = head;
    const values = [];
    while (curr) {
      values.push(curr.val);
      curr = curr.next;
    }
    console.log(values.join(" -> "));
  }
  
  // Example usage:
  // Create the linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);
  head.next.next.next.next.next = new ListNode(6);
  head.next.next.next.next.next.next = new ListNode(7);
  head.next.next.next.next.next.next.next = new ListNode(8);
  
  const newHead = deleteNodes(head, 2, 2);
  printLinkedList(newHead); // Output: 1 -> 2 -> 5 -> 6
  
  // Create the linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10
  const head2 = new ListNode(1);
  head2.next = new ListNode(2);
  head2.next.next = new ListNode(3);
  head2.next.next.next = new ListNode(4);
  head2.next.next.next.next = new ListNode(5);
  head2.next.next.next.next.next = new ListNode(6);
  head2.next.next.next.next.next.next = new ListNode(7);
  head2.next.next.next.next.next.next.next = new ListNode(8);
  head2.next.next.next.next.next.next.next.next = new ListNode(9);
  head2.next.next.next.next.next.next.next.next.next = new ListNode(10);
  
  const newHead2 = deleteNodes(head2, 3, 2);
  printLinkedList(newHead2); // Output: 1 -> 2 -> 3 -> 6 -> 7 -> 8
  
  // Create the linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10
  const head3 = new ListNode(1);
  head3.next = new ListNode(2);
  head3.next.next = new ListNode(3);
  head3.next.next.next = new ListNode(4);
  head3.next.next.next.next = new ListNode(5);
  head3.next.next.next.next.next = new ListNode(6);
  head3.next.next.next.next.next.next = new ListNode(7);
  head3


//// Question--7 ////

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function mergeAlternate(head1, head2) {
    if (!head2) {
      return head1; // Nothing to insert
    }
  
    let curr1 = head1;
    let curr2 = head2;
  
    while (curr1 && curr2) {
      let temp1 = curr1.next;
      let temp2 = curr2.next;
  
      curr1.next = curr2;
      curr2.next = temp1;
  
      curr1 = temp1;
      curr2 = temp2;
    }
  
    return head1;
  }
  
  // Function to print the linked list (for testing purposes)
  function printLinkedList(head) {
    let curr = head;
    const values = [];
    while (curr) {
      values.push(curr.val);
      curr = curr.next;
    }
    console.log(values.join(" -> "));
  }
  
  // Example usage:
  // Create the first linked list: 5 -> 7 -> 17 -> 13 -> 11
  const head1 = new ListNode(5);
  head1.next = new ListNode(7);
  head1.next.next = new ListNode(17);
  head1.next.next.next = new ListNode(13);
  head1.next.next.next.next = new ListNode(11);
  
  // Create the second linked list: 12 -> 10 -> 2 -> 4 -> 6
  const head2 = new ListNode(12);
  head2.next = new ListNode(10);
  head2.next.next = new ListNode(2);
  head2.next.next.next = new ListNode(4);
  head2.next.next.next.next = new ListNode(6);
  
  const mergedHead = mergeAlternate(head1, head2);
  printLinkedList(mergedHead); // Output: 5 -> 12 -> 7 -> 10 -> 17 -> 2 -> 13 -> 4 -> 11 -> 6
  printLinkedList(head2); // Output: null (second list becomes empty after merging)
  
  // Create the first linked list: 1 -> 2 -> 3
  const head3 = new ListNode(1);
  head3.next = new ListNode(2);
  head3.next.next = new ListNode(3);
  
  // Create the second linked list: 4 -> 5 -> 6 -> 7 -> 8
  const head4 = new ListNode(4);
  head4.next = new ListNode(5);
  head4.next.next = new ListNode(6);
  head4.next.next.next = new ListNode(7);
  head4.next.next.next.next = new ListNode(8);
  
  const mergedHead2 = mergeAlternate(head3, head4);
  printLinkedList(mergedHead2); // Output: 1 -> 4 -> 2 -> 5 -> 3 -> 6
  printLinkedList(head4); // Output: 7 -> 8


//// Question--8 ////

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function isCircular(head) {
    if (!head) {
      return false; // An empty list is not circular
    }
  
    let current = head;
    let visited = new Set();
  
    while (current) {
      if (visited.has(current)) {
        return true; // Found a visited node, the list is circular
      }
  
      visited.add(current);
      current = current.next;
    }
  
    return false; // Reached the end of the list, not circular
  }
  
  // Example usage:
  // Create a circular linked list: 1 -> 2 -> 3 -> 4 -> 2 (loop)
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = head.next; // Creating a loop
  
  const isCircularList = isCircular(head);
  console.log(isCircularList); // Output: true
  
  // Create a non-circular linked list: 1 -> 2 -> 3 -> 4
  const head2 = new ListNode(1);
  head2.next = new ListNode(2);
  head2.next.next = new ListNode(3);
  head2.next.next.next = new ListNode(4);
  
  const isCircularList2 = isCircular(head2);
  console.log(isCircularList2); // Output: false


/////////////////////////////////// END ///////////////////////////////////////////////////

  
