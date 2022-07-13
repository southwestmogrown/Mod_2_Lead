const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  while(rootNode.left) {
    rootNode = rootNode.left;
  }
  return rootNode.val;
}

function findMaxBST (rootNode) {
  while(rootNode.right) {
    rootNode = rootNode.right;
  }
  return rootNode.val;
}

function findMinBT (rootNode) {
  let min = rootNode.val;

  const queue = [rootNode];

  while (queue.length) {
    const curr = queue.shift();
    if (curr.val < min) min = curr.val;
    
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return min;
}

function findMaxBT (rootNode) {
  let max = rootNode.val;

  const queue = [rootNode];

  while (queue.length) {
    const curr = queue.shift();
    if (curr.val > max) max = curr.val;
    
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return max;
}

function getHeight (rootNode) {
  if (!rootNode) return 0;
  if (!rootNode.left && !rootNode.right) return 0;

  return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right));
}

function countNodes (rootNode) {
  if (!rootNode) return 0;
  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
}

function balancedTree (rootNode) {
  return Math.log2(countNodes(rootNode)) >= getHeight(rootNode) ? true : false;
}

function getParentNode (rootNode, target) {
  if (rootNode.val === target) return null;

  const stack = [rootNode];

  while (stack.length) {
    const curr = stack.pop();

    if (curr.left && curr.left.val === target ||
        curr.right && curr.right.val === target) {
          return curr;
    }

    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);

  }
}

function inOrderPredecessor (rootNode, target) {
  
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}