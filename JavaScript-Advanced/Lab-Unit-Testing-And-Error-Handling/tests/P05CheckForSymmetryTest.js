let expect = require('chai').expect;
const SYMMETRY = require('../P05CheckForSymmetry')

describe("Symmetry test", function () {
    it('Shout be symmetryc', function () {
        expect(SYMMETRY([5,2,3,2,5])).to.be.equal(true);
    })
    it('Shout not be symmetryc', function () {
        expect(SYMMETRY([1,2])).to.be.equal(false);
    })
    it('Shout be symmetryc', function () {
        expect(SYMMETRY([1,2,1])).to.be.equal(true);
    })
    it('Shout be symmetryc', function () {
        expect(SYMMETRY([])).to.be.equal(true);
    })
    it('Shout be symmetryc', function () {
        expect(SYMMETRY(['test', 1, 'test'])).to.be.equal(true);
    })
    it('Shout be symmetryc', function () {
        expect(SYMMETRY(['test'])).to.be.equal(true);
    })
    it('Shout not be symmetryc', function () {
        expect(SYMMETRY(['test', 1])).to.be.equal(false);
    })
    it('Shout not be symmetryc', function () {
        expect(SYMMETRY([{}, {}])).to.be.equal(true);
    })
    it('Shout be symmetryc', function () {
        expect(SYMMETRY([NaN, NaN])).to.be.equal(true);
    })
    it('Shout be symmetryc', function () {
        expect(SYMMETRY([true, 1])).to.be.equal(false);
    })
})
