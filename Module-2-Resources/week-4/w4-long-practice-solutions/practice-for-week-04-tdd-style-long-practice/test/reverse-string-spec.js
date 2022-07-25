const expect = require('chai').expect;
const reverseString = require('../problems/reverse-string');

describe('reverseString(str)', () => {
    it ('should reverse the passed in string', () => {
        expect(reverseString('fun')).to.eql('nuf');
    });

    it ('should throw an error if str is not of type String', () => {
        expect(() => reverseString(0)).to.throw(TypeError);
    });
});