class Sorted {
    constructor(){
        this.sortedList = [];
        this.size = 0
    }

     add(elemenent) {
        this.sortedList.push(elemenent);
        this.size++;
        this.sort();
    }

    remove(index) {
         if (index < 0 || index > this.sortedList.length -1 ) {
             return this.sortedList;
         }
        this.sortedList.splice(index, 1);
        this.size--;
        this.sort();
    }

    get(index) {
         if (index >= 0 || index < arr.length) {
             return this.sortedList[index];
        }
        throw console.error('Not now');
    }

    sort() {
        this.sortedList.sort((a,b) => a - b)
    }
}

let a = new Sorted()