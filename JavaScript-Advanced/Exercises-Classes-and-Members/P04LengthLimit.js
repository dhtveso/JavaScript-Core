class Stringer {
    constructor(innerString , innerLength ){
        this.innerString = innerString
        this.innerLength = innerLength
    }

    increase(length) {
        this.innerLength += length
    }

    decrease(length) {
        if (this.innerLength - length < 0) {
            this.innerLength = 0;
        } else{
            this.innerLength -= length
        }
    }

    toString() {
        if (this.innerLength >= this.innerString.length) {
            let str = this.innerString;

            return str.toString();
        }

        let lastIndexOfSpace = this.innerString.indexOf(' ', this.innerLength)
        let str = this.innerString.toString();

        if (lastIndexOfSpace > -1) {
            str = str.substring(0, lastIndexOfSpace) + '...'
            if (lastIndexOfSpace >= this.innerLength) {
                let arr = str.split(' ');
                arr.pop();
                
                str = arr.join(' ') + '...'
                if (str.length > this.innerLength) {
                    let arr1 = str.split(' ');
                    arr1.pop();
                
                str = arr1.join(' ') + '...'
                }
            }
        } else {
            str = str.substring(0, this.innerLength) + '...'
        } 

        return str;
    }
}

let s = new Stringer("Viktor", 6);
s.decrease(3);
console.log(s.toString())