const expect = require('chai').expect;

const { returnsThree, reciprocal } = require('../problems/number-fun');


describe('returnsThree()', () => {
    it ('should return the number 3', () => {
        expect(returnsThree()).to.eql(3);
    });
});

describe('reciprocal(num)', () => {
    it ('should return the reciprocal (1/num) of the passed in num', () => {
        expect(reciprocal(4)).to.eql(0.25);
    });
})