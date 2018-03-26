let expect = require('chai').expect;
const lookupChar = require('./P03CharLookup')

describe('Char lookup', function () {

    it('Should return undefind', function () {
        expect(lookupChar(1,1)).to.be.equal(undefined);
    })
    it('Should return undefind index must be number', function () {
        expect(lookupChar('asd', 'sds')).to.be.equal(undefined);
    })
    it('Should return undefind index must be number', function () {
        expect(lookupChar(['asd'], 'sds')).to.be.equal(undefined);
    })
    it('Should return undefind index must be number', function () {
        expect(lookupChar(['asd'], {})).to.be.equal(undefined);
    })
    it('Should return undefind index must be number', function () {
        expect(lookupChar('asd', 3.21)).to.be.equal(undefined);
    })
    it('Should return Incorrect index length > index', function () {
        let instance = lookupChar('123', 5)
        expect(instance).to.be.equal('Incorrect index');
    })
    it('Should return Incorrect index length = index', function () {
        let instance = lookupChar('123', 3)
        expect(instance).to.be.equal('Incorrect index');
    })
    it('Should return Incorrect index index is less than zero', function () {
        let instance = lookupChar('123', -3)
        expect(instance).to.be.equal('Incorrect index');
    })
    it('Should return a string - dda, index = 2', function () {
        expect(lookupChar('dda', 2)).to.be.equal('a');
    })
    it('Should return a string - add, index = 0', function () {
        expect(lookupChar('add', 0)).to.be.equal('a');
    })
    it('Should return Incorrect index when string.Empty, index = 0', function () {
        expect(lookupChar('', 0)).to.be.equal('Incorrect index');
    })
})