class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  push(element) {
    const newNode = new Node(element);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }
    this.size++;
  }

  printList() {
    let current = this.head;
    let list = "";
    while (current !== null) {
      list += current.value + (current.next ? " -> " : "");
      current = current.next;
    }
    console.log(list);
  }
}

const list = new LinkedList();

list.push(10);
list.push(20);
list.push(30);

list.printList();
