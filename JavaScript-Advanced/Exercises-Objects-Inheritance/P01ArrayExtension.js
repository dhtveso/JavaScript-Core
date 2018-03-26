let result = (function () {
    let arr = [];

    Array.prototype.last = function () {
        let result = this.splice(-1);
        return result[0];
    }

    Array.prototype.skip = function (n) {
        let newArr = [];
        for (let i = n; i < this.length; i++) {
            newArr.push(this[i])
        }

        return newArr;
    };

    Array.prototype.take = function (n) {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }
        return result;
    }

    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b, 0);
    }

    Array.prototype.average = function () {
        let avg = this.reduce((a,b) => a + b, 0) / this.length;
        return avg;
    }
})()

var testArray = [1, 2, 3];
console.log(testArray.skip(1)[0]);
console.log(testArray.skip(1)[1]);
