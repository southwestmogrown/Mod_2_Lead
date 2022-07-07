function binaryToString(binaryBlob) {
  const binaryArr = [];

  for (let i = 0; i < binaryBlob.length; i += 8) {
    const binaryStr = binaryBlob.slice(i, (i+8));
    binaryArr.push(String.fromCharCode(parseInt(binaryStr, 2)));
  }

  return binaryArr.join('')
}

/* Comment in the code below to run local tests */
// console.log(binaryToString('010000010100001001000011')); // 'ABC'
// console.log(binaryToString('001101100011011100111000')); // '678'


module.exports = binaryToString;