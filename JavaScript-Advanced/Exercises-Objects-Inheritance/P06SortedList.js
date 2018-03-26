function sorted() {
    let sortedList = [];
    let size = 0

     function add(elemenent) {
        sortedList.push(elemenent);
        this.size++;
        sort();
        return sortedList
    }

     function remove(index) {
         if (index < 0 || index > sortedList.length -1 ) {
             return sortedList;
         }
        sortedList.splice(index, 1);
        this.size--;
        sort();
        return sortedList;
    }

     function get(index) {
         if (index >= 0 || index < arr.length) {
             return sortedList[index];
            }
            throw console.error('Not now');
    }

    function sort() {
        sortedList.sort((a,b) => a - b)
    }

    return {add, remove, get, size }
}


result = sorted();
// expect(result.hasOwnProperty('add')).to.equal(true, "Function add() was not found");
// expect(result.hasOwnProperty('remove')).to.equal(true, "Function remove() was not found");
// expect(result.hasOwnProperty('get')).to.equal(true, "Function get() was not found");

// Instantiate and test functionality
var myList = result;
let a = myList.hasOwnProperty('size')
console.log(a)

myList.add(5);
console.log(myList.get(0));

myList.add(3);
console.log(myList.get(0))

myList.remove(0);
myList.size
console.log(myList.get(0))
console.log(myList.size)