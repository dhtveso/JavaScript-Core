let expect = require('chai').expect;
const mathEnforcer = require('./P04MathEnforcer');

describe('Math enforcer', function () {
    describe('AddFive', function () {
        it('Shoud haveOwnProperty addFive', function () {
            expect(mathEnforcer.hasOwnProperty('addFive'))
        })
        it('Shoud return 15 mathEnforcer.addFive(10)', function () {
            expect(mathEnforcer['addFive'](10)).to.be.equal(15)
        })
        it('Shoud return undefined mathEnforcer.addFive(string)', function () {
            expect(mathEnforcer['addFive']('string')).to.be.equal(undefined)
        })
        it('Shoud return undefined mathEnforcer.addFive({})', function () {
            expect(mathEnforcer['addFive']({})).to.be.equal(undefined)
        })
        it('Shoud return undefined mathEnforcer.addFive(true)', function () {
            expect(mathEnforcer['addFive'](true)).to.be.equal(undefined)
        })
        it('Shoud return -18 mathEnforcer.addFive(-23)', function () {
            expect(mathEnforcer['addFive'](-23)).to.be.equal(-18)
        })
        it('Shoud return 11 mathEnforcer.addFive(11 as string)', function () {
            expect(mathEnforcer['addFive']('11')).to.be.equal(undefined)
        })
    })
    
    describe('subtractTen', function () {
        it('Shoud haveOwnProperty subtractTen', function () {
            expect(mathEnforcer.hasOwnProperty('subtractTen'))
        })
        it('Shoud return 5 mathEnforcer.subtractTen(10)', function () {
            expect(mathEnforcer['subtractTen'](15)).to.be.equal(5)
        })
        it('Shoud return undefined mathEnforcer.subtractTen(string)', function () {
            expect(mathEnforcer['subtractTen']('string')).to.be.equal(undefined)
        })
        it('Shoud return undefined mathEnforcer.sum(-2.1, -3.3)', function () {
            expect(mathEnforcer['subtractTen'](-33)).to.be.equal(-43)
        })
        it('Shoud return undefined mathEnforcer.sum(-2.1, -3.3)', function () {
            expect(mathEnforcer['subtractTen'](41.1)).to.be.equal(31.1)
        })
        it('Shoud return undefined mathEnforcer.sum(-2.1, -3.3)', function () {
            expect(mathEnforcer['subtractTen']({})).to.be.equal(undefined)
        })
        it('Shoud return undefined mathEnforcer.addFive(true)', function () {
            expect(mathEnforcer['subtractTen'](true)).to.be.equal(undefined)
        })
        
    })
    
    describe('sum', function () {
        it('Sum 2.5,2.5 should return 5', function () {
            expect(mathEnforcer.sum(2.5, 2.5)).to.be.equal(5);
        });
        it('Shoud haveOwnProperty sum', function () {
            expect(mathEnforcer.hasOwnProperty('sum'))
        })
        it('Shoud return undefined mathEnforcer.subtractTen(string)', function () {
            expect(mathEnforcer['sum']('string', 1)).to.be.equal(undefined)
        })
        it('Shoud return 10 mathEnforcer.sum(7,3)', function () {
            expect(mathEnforcer['sum'](7,3)).to.be.equal(10)
        })
        it('Shoud return undefined mathEnforcer.sum(1,string)', function () {
            expect(mathEnforcer['sum'](1, 'string')).to.be.equal(undefined)
        })
        it('Shoud return undefined mathEnforcer.sum(2.1, 3.3)', function () {
            expect(mathEnforcer['sum'](2.1, 3.3)).to.be.closeTo(5.4, 0.001)
        })
        it('Shoud return undefined mathEnforcer.sum(-2.1, -3.3)', function () {
            expect(mathEnforcer['sum'](-2.1, -3.3)).to.be.closeTo(-5.4, 0.001)
        })
        it('Shoud return undefined mathEnforcer.sum(-2.1, -3.3)', function () {
            expect(mathEnforcer['sum']({}, -3.3)).to.be.equal(undefined)
        })
        it('Shoud return undefined mathEnforcer.addFive(true)', function () {
            expect(mathEnforcer['sum'](true, 1)).to.be.equal(undefined)
        })
        it('Shoud return undefined mathEnforcer.addFive(true)', function () {
            expect(mathEnforcer['sum'](1, true)).to.be.equal(undefined)
        })
    })

    it('Shoud be object', function () {
        expect(typeof mathEnforcer).to.be.equal('object')
    })
})