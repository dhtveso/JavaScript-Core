(function () {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            let ensuredString = str + this;
            return ensuredString;
        }

        return this.toString();
    }

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            let ensuredString = this + str;
            return ensuredString;
        }

        return this.toString();
    }

    String.prototype.isEmpty = function () {
        if (this == "") {
            return true
        } 

        return false
    }

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }
        if (n >= this.length) {
            let str = this;

            return str.toString();
        }

        let lastIndexOfSpace = this.indexOf(' ', n)
        let str = this.toString();

        if (lastIndexOfSpace > -1) {
            str = str.substring(0, lastIndexOfSpace) + '...'
            if (lastIndexOfSpace >= n) {
                let arr = str.split(' ');
                arr.pop();
                
                str = arr.join(' ') + '...'
                if (str.length > n) {
                    let arr1 = str.split(' ');
                    arr1.pop();
                
                str = arr1.join(' ') + '...'
                }
            }
        } else {
            str = str.substring(0, n-3) + '...'
        } 

        return str;
    }

    String.format = function () {
        let str = arguments[0];
        let regex = new RegExp(/{\d+}/g);
        let getNumber = new RegExp(/\d+/);

        for (let i = 0; i < arguments.length - 1; i++) {
            let placeholder = regex.exec(str)
            let index = Number(getNumber.exec(placeholder));

            if (arguments.length - 1 <= index) {
                continue
            }
            str = str.replace(placeholder, arguments[index + 1])
        }

        return str
    }
})();

var testString = 'the quick brown fox jumps over the lazy dog';
console.log(testString.truncate(25));