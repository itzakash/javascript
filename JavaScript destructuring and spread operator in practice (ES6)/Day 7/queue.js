class Queue {
  constructor() {
    this.items = [];
  }

  enquee(element) {
    this.items.push(element);
  }

  dequess() {
    return this.items.length === 0 ? "Underflow" : this.items.shift();
  }

  peek() {
    return this.items[0];
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

console.log("Queue: ", queue.printQueue());
console.log("Dequee", queue.dequess());
console.log("After Dequee", queue.printQueue());
console.log("Peek: ", queue.peek());
