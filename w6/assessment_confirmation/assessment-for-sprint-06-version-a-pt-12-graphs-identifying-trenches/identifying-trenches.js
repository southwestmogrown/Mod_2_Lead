function findNeighbors(node, matrix) {
    // Only consider N, S, E, W nodes
    const [row, col] = node;
    const neighbors = [];

    // North
    if (row > 0 && matrix[row-1][col] < -5) {
        neighbors.push([row-1,col]);
    }
    // South
    if (row < matrix.length - 1 && matrix[row+1][col] < -5) {
        neighbors.push([row+1,col])
    }  
    // East
    if (col > 0 && matrix[row][col-1] < -5) {
        neighbors.push([row,col-1]);
    }
    // West
    if (col < matrix[row].length - 1 && matrix[row][col+1] < -5) {
        neighbors.push([row,col+1]);
    }
    // Your code here
    return neighbors;
}

function trenchTraversal(node, matrix, visited) {
    // Don't bother traversing if it is to shallow

    if (matrix[node[0]][node[1]] >= -5) return false;

    // Traverse the potential trench to count it's length
    let length = 0;
    const queue = [node];

    visited.add(node.toString());

    while (queue.length) {
        const node = queue.shift();

        length++;

        const neighbors = findNeighbors(node, matrix, visited);

        if (neighbors.length < 1 || neighbors.length > 2) return false;
        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor.toString())) {
                queue.push(neighbor);
                visited.add(neighbor.toString());
            }
        });
    }
    return length > 2 ? true : false;
    // Your code here
}

function identifyTrench(trenchMatrix) {
    // Start at 0,0 and attempt to traverse any unvisited nodes
    // Your code here
    const visited = new Set();

    for (let row = 0; row < trenchMatrix.length; row++) {
        for (let col = 0; col < trenchMatrix[0].length; col++) {
            
            if (trenchMatrix[row][col] > -4) continue;
            else 
                if (trenchTraversal([row,col], trenchMatrix, visited)) return true;
                continue
        }
    }
    return false;
}

// Uncomment for local testing

// // Example 0
// const sonar_0 = [
//     [-5, -5, -5],
//     [-6, -5, -8],
//     [-5, -7, -5]
// ]

// console.log(findNeighbors([1,1], sonar_0)) // => Expect [[2, 1], [1, 0], [1, 2]];

// // Example 1
// const sonar_1 = [
//           [-5,-5,-5,-5,-5],
//           [-5,-8,-8,-9,-7],
//           [-5,-5,-5,-5,-8],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_1)) // <- Expect 'true'

// // Example 2
// const sonar_2 = [
//           [-5,-5,-5,-7,-5],
//           [-5,-8,-8,-9,-5],
//           [-5,-5,-5,-7,-5],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_2)) // <- Expect 'false'

// // Example 3
// const sonar_3 = [
//           [-5,-5,-5,-5,-5],
//           [-5,-5,-5,-5,-5],
//           [-5,-9,-9,-5,-5],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_3)) // <- Expect 'false'


/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyTrench, findNeighbors, trenchTraversal];