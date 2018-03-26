function processOddNumber(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 1) {
            result.push(arr[i] * 2)
        }
    }
    console.log(result.reverse());
}

processOddNumber([3, 0, 10, 4, 7, 3])