function listProcessor(array) {
    let commandExecutor = (function () {
        let arr = [];
        function add(str) {
            arr.push(str);
        }
        function remove(str) {
            arr = arr.filter(w => w !== str);
        }
        function print() {
            console.log(arr.join(','));
        }
        return {add, remove, print}
    }())

    for (let str of array) {
        let [command, value] = str.split(' ');

        commandExecutor[command](value);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);