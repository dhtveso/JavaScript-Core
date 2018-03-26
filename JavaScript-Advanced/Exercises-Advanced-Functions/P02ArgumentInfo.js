function solve() {
    let summary = {}; 

    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;

        if (!summary[type]) {
            summary[type] = 1;
        } else{
            summary[type]++;
        }
        console.log(`${type}: ${obj}`);
    }

    let sorted = Object.keys(summary).sort((a, b) => summary[b] - summary[a]);

    for (let obj of sorted) {
        let count = summary[obj];
        if (count > 0) {
            console.log(`${obj} = ${count}`);
        }
    }
}

solve('asdd');
solve(1, 'asdasdsa')