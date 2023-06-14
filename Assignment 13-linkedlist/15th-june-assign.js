////// SOLUTIONS OF THE ASSIGNMENT QUESTIONS--13 ///////

//// Question--1 ////

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node(value);
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

  displayList() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + '->';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }
}

function createNewList(list1, list2) {
  if (!list1.head || !list2.head) {
    return null;
  }

  const newList = new LinkedList();
  let current1 = list1.head;
  let current2 = list2.head;

  while (current1 && current2) {
    const greaterNode = current1.data >= current2.data ? current1.data : current2.data;
    newList.addNode(greaterNode);
    current1 = current1.next;
    current2 = current2.next;
  }

  return newList;
}

// Example usage
const list1 = new LinkedList();
list1.addNode(5);
list1.addNode(2);
list1.addNode(3);
list1.addNode(8);

const list2 = new LinkedList();
list2.addNode(1);
list2.addNode(7);
list2.addNode(4);
list2.addNode(5);

const newList = createNewList(list1, list2);
newList.displayList();


//// Question--2 ////

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node(value);
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

  displayList() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + '->';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }
}

function removeDuplicates(list) {
  if (!list.head || !list.head.next) {
    return list;
  }

  let current = list.head;

  while (current.next) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return list;
}

// Example usage
const list = new LinkedList();
list.addNode(11);
list.addNode(11);
list.addNode(11);
list.addNode(21);
list.addNode(43);
list.addNode(43);
list.addNode(60);

console.log("Original List:");
list.displayList();

removeDuplicates(list);

console.log("List after removing duplicates:");
list.displayList();


//// Question--3 ////

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node(value);
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

  displayList() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + '->';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }
}

function reverseKNodes(list, k) {
  if (!list.head || k <= 1) {
    return list;
  }

  const reverse = (head, count) => {
    let prev = null;
    let current = head;
    let next = null;

    while (current && count > 0) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      count--;
    }

    return [prev, current];
  };

  let current = list.head;
  let newHead = null;
  let prevTail = null;

  while (current) {
    let tail = current;
    let count = k;

    while (tail && count > 1) {
      tail = tail.next;
      count--;
    }

    if (!tail) {
      if (!newHead) {
        newHead = current;
      } else {
        prevTail.next = current;
      }
      break;
    }

    let nextHead = tail.next;
    tail.next = null;

    const [reversedHead, reversedTail] = reverse(current, k);
    
    if (!newHead) {
      newHead = reversedHead;
    } else {
      prevTail.next = reversedHead;
    }

    prevTail = reversedTail;
    current = nextHead;
  }

  list.head = newHead;
  return list;
}

// Example usage
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(2);
list.addNode(4);
list.addNode(5);
list.addNode(6);
list.addNode(7);
list.addNode(8);

console.log("Original List:");
list.displayList();

const k = 4;
reverseKNodes(list, k);

console.log(`List after reversing every ${k} nodes:`);
list.displayList();


//// Question--4 ////

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node(value);
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

  displayList() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + '->';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }
}

function reverseAlternateKNodes(list, k) {
  if (!list.head || k <= 1) {
    return list;
  }

  let current = list.head;
  let prev = null;

  let shouldReverse = true;
  let count = 0;
  let prevSegmentTail = null;

  while (current) {
    count++;

    if (shouldReverse && count % k === 1) {
      let segmentTail = current;
      let segmentPrev = prev;
      let segmentNext = null;

      while (current && count % k !== 0) {
        const next = current.next;
        current.next = segmentNext;
        segmentNext = current;
        current = next;
        count++;
      }

      if (!prevSegmentTail) {
        list.head = segmentNext;
      } else {
        prevSegmentTail.next = segmentNext;
      }

      prevSegmentTail = segmentTail;
      segmentTail.next = current;
      prev = segmentPrev;
    } else {
      prev = current;
      current = current.next;
    }

    shouldReverse = !shouldReverse;
  }

  return list;
}

// Example usage
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);
list.addNode(6);
list.addNode(7);
list.addNode(8);
list.addNode(9);

console.log("Original List:");
list.displayList();

const k = 3;
reverseAlternateKNodes(list, k);

console.log(`List after reversing every alternate ${k} nodes:`);
list.displayList();


//// Question--5 ////

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node(value);
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

  displayList() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + '->';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }

  deleteLastOccurrence(key) {
    if (!this.head) {
      return;
    }

    let lastOccurrence = null;
    let prevLastOccurrence = null;
    let current = this.head;
    let prev = null;

    while (current) {
      if (current.data === key) {
        lastOccurrence = current;
        prevLastOccurrence = prev;
      }
      prev = current;
      current = current.next;
    }

    if (!lastOccurrence) {
      return;
    }

    if (!prevLastOccurrence) {
      this.head = lastOccurrence.next;
    } else {
      prevLastOccurrence.next = lastOccurrence.next;
    }
  }
}

// Example usage
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(5);
list.addNode(2);
list.addNode(10);

console.log("Original List:");
list.displayList();

const key = 2;
list.deleteLastOccurrence(key);

console.log(`List after deleting last occurrence of ${key}:`);
list.displayList();


//// Question--6 ////

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node(value);
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

  displayList() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + '->';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }
}

function mergeSortedLists(listA, listB) {
  if (!listA.head) {
    return listB;
  }
  if (!listB.head) {
    return listA;
  }

  let head = null;
  let tail = null;
  let nodeA = listA.head;
  let nodeB = listB.head;

  if (nodeA.data <= nodeB.data) {
    head = nodeA;
    nodeA = nodeA.next;
  } else {
    head = nodeB;
    nodeB = nodeB.next;
  }
  tail = head;

  while (nodeA && nodeB) {
    if (nodeA.data <= nodeB.data) {
      tail.next = nodeA;
      nodeA = nodeA.next;
    } else {
      tail.next = nodeB;
      nodeB = nodeB.next;
    }
    tail = tail.next;
  }

  if (nodeA) {
    tail.next = nodeA;
  } else {
    tail.next = nodeB;
  }

  listA.head = head;
  return listA;
}

// Example usage
const listA = new LinkedList();
listA.addNode(5);
listA.addNode(10);
listA.addNode(15);

const listB = new LinkedList();
listB.addNode(2);
listB.addNode(3);
listB.addNode(20);

console.log("List A:");
listA.displayList();
console.log("List B:");
listB.displayList();

mergeSortedLists(listA, listB);

console.log("Merged List:");
listA.displayList();


//// Question--8 ////

class Node {
  constructor(value) {
    this.data = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      newNode.prev = current;
    }
  }

  displayList() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + ' ';
      current = current.next;
    }
    console.log(result);
  }

  deleteNode(position) {
    if (!this.head) {
      return;
    }

    if (position === 1) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
      return;
    }

    let current = this.head;
    let count = 1;

    while (current && count < position) {
      current = current.next;
      count++;
    }

    if (!current) {
      return;
    }

    const prevNode = current.prev;
    const nextNode = current.next;

    if (prevNode) {
      prevNode.next = nextNode;
    }

    if (nextNode) {
      nextNode.prev = prevNode;
    }
  }
}

// Example usage
const list = new DoublyLinkedList();
list.addNode(1);
list.addNode(3);
list.addNode(4);

console.log("Original List:");
list.displayList();

const position = 3;
list.deleteNode(position);

console.log(`List after deleting node at position ${position}:`);
list.displayList();








