const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

const ll = new LinkedList();
const dll = new DoublyLinkedList();

const n = 10000;


const llAddToHeadStart = Date.now();
for (let i = 0; i < n; i++) {
    ll.addToHead(i);
}
const llAddToHeadEnd = Date.now();

console.log("LL Add to Head",`${llAddToHeadEnd - llAddToHeadStart}`);

const llAddToTailStart = Date.now();
for (let i = 0; i < n; i++) {
    ll.addToTail(i);
}
const llAddToTailEnd = Date.now();
console.log("LL Add to Tail" ,`${llAddToTailEnd - llAddToTailStart}`);

const dllAddToHeadStart = Date.now();
for (let i = 0; i < n; i++) {
    dll.addToHead(i);
}
const dllAddToHeadEnd = Date.now();

console.log("DLL Add to Head" ,`${dllAddToHeadEnd - dllAddToHeadStart}`);

const dllAddToTailStart = Date.now();
for (let i = 0; i < n; i++) {
    dll.addToTail(i);
}
const dllAddToTailEnd = Date.now();
console.log("DLL Add to Tail" ,`${dllAddToTailEnd - dllAddToTailStart}`);

