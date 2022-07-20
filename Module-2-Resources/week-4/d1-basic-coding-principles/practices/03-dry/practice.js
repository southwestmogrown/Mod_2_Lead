function findBiggerNum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum = findBiggerNum(num1, num2);

  return bigNum * 2;
  
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum = findBiggerNum(num1, num2);
  
  return  bigNum / 3;

}

function eatMostTacos(sum1, sum2) {
  let bigNum = findBiggerNum(sum1, sum2);

  return `I ate ${bigNum} tacos.`
  
}

function adoptSmallerDog(weight1, weight2) {
  const smaller = findBiggerNum(weight1, weight2) === weight1 ? weight2 : weight1
  return `I adopted a dog that weighs ${smaller} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
