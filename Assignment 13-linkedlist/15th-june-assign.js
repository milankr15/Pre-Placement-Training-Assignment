////// SOLUTIONS OF THE ASSIGNMENT QUESTIONS--13 ///////

//// Question--1 ////

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insert(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    deleteMiddle() {
      if (!this.head || !this.head.next) {
        // Empty list or only one node
        return;
      }
  
      let slow = this.head;
      let fast = this.head;
      let prev = null;
  
      while (fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
      }
  
      // Skip the middle node(s)
      prev.next = slow.next;
    }
  
    display() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Example 1
  const list1 = new LinkedList();
  list1.insert(1);
  list1.insert(2);
  list1.insert(3);
  list1.insert(4);
  list1.insert(5);
  list1.deleteMiddle();
  list1.display(); // Output: 1 2 4 5
  
  // Example 2
  const list2 = new LinkedList();
  list2.insert(2);
  list2.insert(4);
  list2.insert(6);
  list2.insert(7);
  list2.insert(5);
  list2.insert(1);
  list2.deleteMiddle();
  list2.display(); // Output: 2 4 6 5 1


//// Question--2 ////

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insert(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    hasLoop() {
      let slow = this.head;
      let fast = this.head;
  
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
  
        if (slow === fast) {
          return true; // Loop detected
        }
      }
  
      return false; // No loop found
    }
  }
  
  // Example 1
  const list1 = new LinkedList();
  list1.insert(1);
  list1.insert(3);
  list1.insert(4);
  list1.head.next.next.next = list1.head.next;
  console.log(list1.hasLoop()); // Output: true
  
  // Example 2
  const list2 = new LinkedList();
  list2.insert(1);
  list2.insert(8);
  list2.insert(3);
  list2.insert(4);
  console.log(list2.hasLoop()); // Output: false


//// Question--3 ////

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insert(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    findNthFromEnd(n) {
      if (n <= 0) {
        return -1; // Invalid input
      }
  
      let slow = this.head;
      let fast = this.head;
  
      // Move the fast pointer ahead by n positions
      for (let i = 0; i < n; i++) {
        if (fast === null) {
          return -1; // n exceeds the length of the linked list
        }
        fast = fast.next;
      }
  
      // Move both pointers together until fast reaches the end
      while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
      }
  
      if (slow !== null) {
        return slow.data; // Return the data of the Nth node from the end
      } else {
        return -1; // Empty linked list
      }
    }
  }
  
  // Example 1
  const list1 = new LinkedList();
  list1.insert(1);
  list1.insert(2);
  list1.insert(3);
  list1.insert(4);
  list1.insert(5);
  list1.insert(6);
  list1.insert(7);
  list1.insert(8);
  list1.insert(9);
  console.log(list1.findNthFromEnd(2)); // Output: 8
  
  // Example 2
  const list2 = new LinkedList();
  list2.insert(10);
  list2.insert(5);
  list2.insert(100);
  list2.insert(5);
  console.log(list2.findNthFromEnd(5)); // Output: -1


//// Question--4 ////
//// Question--5 ////
//// Question--6 ////

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insert(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    retainAndDeleteNodes(M, N) {
      if (!this.head) {
        return;
      }
  
      let current = this.head;
      let prev = null;
      let count = 0;
  
      // Traverse the linked list
      while (current) {
        count++;
  
        // Retain M nodes
        if (count % (M + N) <= M) {
          prev = current;
          current = current.next;
        } else {
          // Delete N nodes
          let tempCount = 0;
          while (current && tempCount < N) {
            current = current.next;
            tempCount++;
          }
  
          // Adjust the next pointer of the previous node
          prev.next = current;
        }
      }
    }
  }
  
  // Example 1
  const list1 = new LinkedList();
  list1.insert(1);
  list1.insert(2);
  list1.insert(3);
  list1.insert(4);
  list1.insert(5);
  list1.insert(6);
  list1.insert(7);
  list1.insert(8);
  list1.retainAndDeleteNodes(2, 2);
  console.log(list1.head); // Output: Node { data: 1, next: Node { data: 2, next: Node { data: 5, next: Node { data: 6, next: null } } } }
  
  // Example 2
  const list2 = new LinkedList();
  list2.insert(1);
  list2.insert(2);
  list2.insert(3);
  list2.insert(4);
  list2.insert(5);
  list2.insert(6);
  list2.insert(7);
  list2.insert(8);
  list2.insert(9);
  list2.insert(10);
  list2.retainAndDeleteNodes(3, 2);
  console.log(list2.head); // Output: Node { data: 1, next: Node { data: 2, next: Node { data: 3, next: Node { data: 6, next: Node { data: 7, next: Node { data: 8, next: null } } } } } }
  
  // Example 3
  const list3 = new LinkedList();
  list3.insert(1);
  list3.insert(2);
  list3.insert(3);
  list3.insert(4);
  list3.insert(5);
  list3.insert(6);
  list3.insert(7);
  list3.insert(8);
  list3.insert(9);
  list3.insert(10);
  list3.retainAndDeleteNodes(1, 1);
  console.log(list3.head); // Output: Node { data: 1, next: Node { data: 3, next: Node { data: 5, next: Node { data: 7, next: Node { data: 9, next: null } } } } }


//// Question--7 ////
//// Question--8////

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insert(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    isCircular() {
      if (!this.head) {
        return false;
      }
  
      let slow = this.head;
      let fast = this.head;
  
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
  
        if (slow === fast) {
          return true; // Circular linked list
        }
      }
  
      return false; // Not a circular linked list
    }
  }
  
  // Create a circular linked list
  const circularList = new LinkedList();
  circularList.insert(1);
  circularList.insert(2);
  circularList.insert(3);
  circularList.insert(4);
  
  // Make the linked list circular by connecting the last node to the first node
  const lastNode = circularList.head;
  while (lastNode.next) {
    lastNode = lastNode.next;
  }
  lastNode.next = circularList.head;
  
  console.log(circularList.isCircular()); // Output: true
  
  // Create a non-circular linked list
  const nonCircularList = new LinkedList();
  nonCircularList.insert(1);
  nonCircularList.insert(2);
  nonCircularList.insert(3);
  nonCircularList.insert(4);
  
  console.log(nonCircularList.isCircular()); // Output: false


///////////////////////////////// END //////////////////////////////////////////////////
  

