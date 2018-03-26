let expect = require('chai').expect;
const isOddOrEven = require('./P02EvenOrOdd')

describe('Even or Odd', function () {
    it('Invalid param', function () {
        expect(isOddOrEven(1)).to.be.equal(undefined)
    })
    it('Invalid param', function () {
        expect(isOddOrEven({})).to.be.equal(undefined)
    })
    it('Invalid param', function () {
        expect(isOddOrEven([])).to.be.equal(undefined)
    })
    it('Even', function () {
        expect(isOddOrEven('Even')).to.be.equal('even')
    })
    it('Odd', function () {
        expect(isOddOrEven('odd')).to.be.equal('odd')
    })
})