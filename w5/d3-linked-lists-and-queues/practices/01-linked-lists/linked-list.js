class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;  
  }

  addToHead(val) {
    const node = new LinkedListNode(val);
    
    node.next = this.head;
    this.head = node;
    
    this.length++;
  }

  addToTail(val) {
    const node = new LinkedListNode(val);
    this.length++;

    if (!this.head) {
      this.head = node;
      return this;
    }

    let curr = this.head;

    while (curr.next) {
      curr = curr.next;
    }

    curr.next = node;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
