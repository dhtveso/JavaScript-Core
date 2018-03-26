let expect = require('chai').expect;
const createCalculator = require('../P07AddSubtract')


describe('Add/Substract Tests', function () {
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    })

    it('Shout be true when call add() function', function () {
        expect(calc.hasOwnProperty('add')).to.be.equal(true)
    })
    it('Shout be true when call subtract() function', function () {
        expect(calc.hasOwnProperty('subtract')).to.be.equal(true)
    })
    it('Shout be true when call get() function', function () {
        expect(calc.hasOwnProperty('get')).to.be.equal(true)
    })
    it('Shout be 0 when call get() ', function () {
        expect(calc.get()).to.be.equal(0)
    })
    it('Shout be 5 when call add(5), get() ', function () {
        calc.add(5)
        expect(calc.get()).to.be.equal(5)
    })
    it('Shout be -10 when call subtract(10), get() ', function () {
        calc.subtract(10)
        expect(calc.get()).to.be.equal(-10)
    })
    it('Shout be NaN when call add(string), get() ', function () {
        calc.add('asd')
        expect(calc.get()).to.be.NaN
    })
    it('Shout be NaN when call subtract(string), get() ', function () {
        calc.subtract('asd')
        expect(calc.get()).to.be.NaN
    })
    it('Shout be -10 when call add(-20), substract(10), get() ', function () {
        calc.add(-20);
        calc.subtract(-10)
        expect(calc.get()).to.be.equal(-10)
    })
    it('Shout be -20 when call calc.add(-20)', function () {
        calc.add(-20);
        expect(calc.get()).to.be.equal(-20)
    })
    it('Shout be 0 when call calc.add(0)', function () {
        calc.add(0);
        expect(calc.get()).to.be.equal(0)
    })
    it('Shout be {} when call typeof calc', function () {
        expect(typeof calc).to.be.equal('object')
    })

    it('Shout work with fractions', function () {
        calc.add(3.14);
        calc.subtract(1.13);
        expect(calc.get()).to.be.closeTo(2.01, 0.001)
    })

    it('Shout work with numbers as strings', function () {
        calc.add('7');
        calc.add(1)
        expect(calc.get()).to.equal(8)
    })
})