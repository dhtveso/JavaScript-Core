function inherit (input) {
    let commandExecutor = (function () {
        let store = {};

        function create(array) {
            if (array.length > 2) {
                store[array[0]] = Object.create(store[array[2]])
            } else {
                store[array[0]] = {};
            }
        }
        function set(array) {
            let name = array[0];
            let key = array[1];
            let value = array[2]
            store[name][key] = value;
        }

        function print(array) {
            let result = [];
            let obj = store[array[0]];
            for (let key in store[array[0]]) {
                result.push(`${key}:${obj[key]}`)
            }
            
            console.log(result.join(', '));
        }
        return {create, set, print}
    }())

    for (let str  of input) {
        let args = str.split(' ');
        let command = args.shift();
        commandExecutor[command](args)
    }
}

inherit(['create c1',
         'create c2 inherit c1',
         'set c1 color red',
         'set c2 model new',
         'print c1',
         'print c2'])