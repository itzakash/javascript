class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  length() {
    return this.items.length;
  }

  printStack() {
    return this.items;
  }
}

const stack = new Stack();

stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log("Stack : ", stack.printStack());
console.log("Peek: ", stack.peek());
console.log("Pop: ", stack.pop());
console.log("Pop after stack: ", stack.printStack());
