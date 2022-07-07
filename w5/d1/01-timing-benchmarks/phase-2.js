const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  const res = [];

  for (let i = increment; i <= (10 * increment); i += increment) {
    res.push(addNums(i));
  } 

  return res;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  const res = [];

  for (let i = increment; i <= (10 * increment); i += increment) {
    res.push(addManyNums(i));
  } 

  return res;

}

module.exports = [addNums10, addManyNums10];
