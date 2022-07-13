// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
      this.root = null;
  }

  insert(val, currentNode=this.root) {
      // create a new node
      const node = new TreeNode(val);
      // if the current node is null 
          // set the root to the new node and return
      if (!currentNode) {
          this.root = node;
          return;
      }
      // if val is less than the currentNode
      if (val < currentNode.val) {
        // currentNode.left is null
        if (!currentNode.left){
          // point currentNode.left at the new node
           currentNode.left = node;
        } else {
          // otherwise recursively call insert passing in the val and currentNode.left
          return this.insert(val, currentNode.left);         
        } 
      }
      
      /// if val is greater than the currentNode
      if (val > currentNode.val) {
        // currentNode.right is null
        if (!currentNode.right){
          // point currentNode.right at the new node
           currentNode.right = node;
        } else {
          // otherwise recursively call insert passing in the val and currentNode.right
          return this.insert(val, currentNode.right);         
        } 
      }   
  }

  search(val) {
      // create a current variable and point it at the root
      let curr = this.root;

      // if there is no root return false;
      if (!curr) return false;

      // while there is a curr
      while (curr) {
          // if val is less than curr's value
          if (val < curr.val) {
              // move curr to the left
              curr = curr.left
            // if val is greater than curr's value
          } else if (val > curr.val) {
              // move curr to the right
              curr = curr.right
          } else {
              // if it's neither, it must be the target, return true
              return true;
          }
      }
      // if the tree is not in the target, return false
      return false;
  }

// The traversal strategy the programmer selects depends on the 
// specific needs of the algorithm being designed. 
// The goal is speed, so pick the strategy that brings you the nodes
//  you require the fastest.

// If you know you need to explore the roots before inspecting
// any leaves, you pick pre-order because you will encounter 
// all the roots before all of the leaves.

// If you know you need to explore all the leaves before any nodes,
//  you select post-order because you don't waste any time inspecting 
// roots in search for leaves.

// If you know that the tree has an inherent sequence in the nodes, 
// and you want to flatten the tree back into its original sequence, 
// than an in-order traversal should be used. 
// The tree would be flattened in the same way it was created. 

// A pre-order or post-order traversal might not unwind the tree back 
// into the sequence which was used to create it.

  //      4
  //    /   \
  //   2     6
  //  / \   / \
  // 1   3 5   7

  // self, left, right
  // 4,2,1,3,6,5,7
  preOrderTraversal(currentNode = this.root) {
      if (!currentNode) return;
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
  }

  //      4
  //    /   \
  //   2     6
  //  / \   / \
  // 1   3 5   7

  // left,self,right
  // 1,2,3,4,5,6,7
  inOrderTraversal(currentNode = this.root) {
      // Your code here
      if (!currentNode) return;
      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
  }

  //      4
  //    /   \
  //   2     6
  //  / \   / \
  // 1   3 5   7

  // left, right, self
  // 1,3,2,5,7,6
  postOrderTraversal(currentNode = this.root) {
      // Your code here
      if (!currentNode) return;
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
  }

  //      4
  //    /   \
  //   2     6
  //  / \   / \
  // 1   3 5   7

  // goes by level
  // 4,2,6,1,3,5,7

      // Breadth First Traversal - Iterative
  breadthFirstTraversal() {

      if (!this.root) return;
      const queue = [this.root];

      while (queue.length) {
          let curr = queue.shift();
          console.log(curr.val);
          if (curr.left) queue.push(curr.left);
          if (curr.right) queue.push(curr.right);
      }
  }

  //      4
  //    /   \
  //   2     6
  //  / \   / \
  // 1   3 5   7

  // 4,2,6,7,5,2,3,1
  // Depth First Traversal - Iterative
  depthFirstTraversal(/*currNode=this.root*/) {
      if (!this.root) return;

      const stack = [this.root]; // [,]

      while (stack.length) {
          let curr = stack.pop(); // 1

          console.log(curr.val); // 4,2,6,7,5,2,3,1

          if (curr.left) stack.push(curr.left); // 
          if (curr.right) stack.push(curr.right); //
      }

      // if (!this.root) return;
      // console.log(currNode);
      // this.depthFirstTraversal(currNode.left);
      // this.depthFirstTraversal(currNode.right);
  }
}

module.exports = { BinarySearchTree, TreeNode };
