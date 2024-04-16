class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enquee(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequee() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  length() {
    return this.rear - this.front;
  }

  printQueue() {
    return this.items;
  }
}

const queue = new Queue();

queue.enquee(2);
queue.enquee(3);
queue.enquee(4);
queue.enquee(5);
queue.enquee(6);

console.log("Print Queue: ", queue.printQueue());
console.log("Dequee: ", queue.dequee());
console.log("After dequee: ", queue.printQueue());
console.log("Length: ", queue.length());
