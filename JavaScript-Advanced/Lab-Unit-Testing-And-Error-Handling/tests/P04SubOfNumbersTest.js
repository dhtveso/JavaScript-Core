let expect = require('chai').expect;
let sum = require('../P04SumOfNumbers');

describe("Sum test", function () {
    it('Should return 3 [1,2]', function () {
        expect(sum([1,2])).to.be.equal(3);
    }),
    it('Should return 1 [1]', function () {
        expect(sum([1])).to.be.equal(1);
    }),
    it('Should return 0 []', function () {
        expect(sum([])).to.be.equal(0);
    })
    it('Should return -1', function () {
        expect(sum([-1])).to.be.equal(-1)
    })
    it('Should return NaN [`test`]', function () {
        expect(sum(['test'])).to.be.NaN
    })
})