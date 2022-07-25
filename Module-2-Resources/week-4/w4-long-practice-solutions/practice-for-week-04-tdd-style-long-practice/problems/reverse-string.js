module.exports = function reverseString(string) {
  if (!(typeof string === 'string')) throw new TypeError;
  return string.split('').reverse().join('');
};