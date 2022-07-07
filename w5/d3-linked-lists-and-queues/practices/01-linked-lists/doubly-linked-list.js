class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    const node = new DoublyLinkedListNode(val);

    this.length++;

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;

  }

  addToTail(val) {
    const node = new DoublyLinkedListNode(val);
    this.length++;

    if (!this.head) {
      this.head = node;
      this.tail = node;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;

  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
