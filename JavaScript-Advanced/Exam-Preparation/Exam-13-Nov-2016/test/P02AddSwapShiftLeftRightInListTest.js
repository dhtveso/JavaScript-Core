var expect = require('chai').expect;
let createList = require('../P02AddSwapShiftLeftRightInList');

describe("CreateList Test", function() {
    let list;
    beforeEach(function () {
        list = createList();
    })

        it("Shoud have all properties", function() {
            expect(list.hasOwnProperty('add')).to.equal(true)
            expect(list.hasOwnProperty('shiftLeft')).to.equal(true)
            expect(list.hasOwnProperty('shiftRight')).to.equal(true)
            expect(list.hasOwnProperty('swap')).to.equal(true)
            expect(list.hasOwnProperty('toString')).to.equal(true)
            expect(typeof list).to.equal('object')
        }),

        it("Shoud insert 2 string", function() {
            list.add('one')
            list.add('two')
            list.add(5)
            expect(list.toString()).to.equal('one, two, 5')
        }),
        it("Shoud insert 2 number", function() {
            list.add(1)
            list.add(1.1)
            expect(list.toString()).to.equal('1, 1.1')
        }),
        it("Shoud insert 2 different type", function() {
            list.add('one')
            list.add([1.1])
            expect(list.toString()).to.equal('one, 1.1')
        }),

        it("Shoud shiftLeft 2 string", function() {
            list.add('one')
            list.add('two')
            list.add('two')
            list.shiftLeft()
            expect(list.toString()).to.equal('two, two, one')
        }),

        it("Shoud shiftLeft on empty List", function() {
            list.shiftLeft()
            expect(list.toString()).to.equal('')
        }),

        it("Shoud shiftLeft, shiftRight on empty List", function() {
            list.add('one')
            list.add('two')
            list.add('two')
            list.shiftLeft()
            list.shiftRight()
            expect(list.toString()).to.equal('one, two, two')
        }),

        it("Shoud shiftLeft 2 string", function() {
            list.add('one')
            list.add('two')
            list.add('two')
            list.shiftRight()
            expect(list.toString()).to.equal('two, one, two')
        }),

        it("Shoud shiftRight on empty List", function() {
            list.shiftRight()
            expect(list.toString()).to.equal('')
        }),

        it("invalid index", function() {
            list.add('one')
            list.add('two')
            list.add('two')
            expect(list.swap('1', [])).to.equal(false)
            expect(list.swap(1, 1)).to.equal(false)
            expect(list.swap(-1, 1)).to.equal(false)
            expect(list.swap(1, -1)).to.equal(false)
            expect(list.swap(1, 3)).to.equal(false)
            expect(list.swap(3, 1)).to.equal(false)
        }),
        
        it("valid index", function() {
            list.add('one')
            list.add('two')
            list.add('two')
            expect(list.swap(0, 1)).to.equal(true)
            expect(list.toString()).to.equal('two, one, two')
        })

        it("valid index", function() {
            list.add('one')
            list.add('two')
            list.add('two')
            expect(list.swap(1, 0)).to.equal(true)
            expect(list.toString()).to.equal('two, one, two')
        })

        it('with a non integer first index, should not change the collection', function () {
            list.add('one');
            list.add('two');
            list.swap([], 1);
            expect(list.toString()).to.equal("one, two");
        });

})
