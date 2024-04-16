class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.front = -1;
    this.rear = -1;
    this.currentLength = 0;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }

  enquee(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;

      this.currentLength = this.currentLength + 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    } else {
      console.log("full");
    }
  }

  dequee() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];

    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;

    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }

    return item;
  }

  peek() {
    return this.isEmpty() ? null : this.items[this.front];
  }

  print() {
    return this.items;
  }
}

const circularQueue = new CircularQueue(5);

circularQueue.enquee(1);
circularQueue.enquee(2);
circularQueue.enquee(3);
console.log("After Enquee the 3 elements 1,2,3", circularQueue.print());

circularQueue.dequee();

console.log("Peek element", circularQueue.peek());

circularQueue.dequee();
console.log("After dequee the 2 elements", circularQueue.print());

circularQueue.enquee(4);
circularQueue.enquee(5);
circularQueue.enquee(6);
circularQueue.enquee(7);
console.log("After Enquee the 3 elements 4,5,6,and 7", circularQueue.print());
