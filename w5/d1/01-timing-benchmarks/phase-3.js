const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  const res = [];

  for (let i = increment; i <= (10 * increment); i += increment) {
    // console.time(`i=${i}`)
    const before = Date.now();
    res.push(addNums(i));
    // console.timeEnd(`i=${i}`)
    const after = Date.now();
    const time = after - before;
    console.log(time);
  } 

  return res;

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

const res = [];

for (let i = increment; i <= (10 * increment); i += increment) {
  // console.time(`i=${i}`)
  const before = Date.now();
  res.push(addManyNums(i));
  // console.timeEnd(`i=${i}`)
  const after = Date.now();
  const time = after - before;
  console.log(time);
} 

return res;

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(10000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(10000);
