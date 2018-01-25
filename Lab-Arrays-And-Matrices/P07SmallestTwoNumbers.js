function smallestTwoNumber(arr) {
    let result = [];
    result.push(arr[0]);
    result.push(arr[1]);

    for (let i = 2; i <= arr.length; i++) {
        if (result[0] > arr[i] || result[1] > arr[i]) {
            result.push(arr[i]);
            let getMax = Math.max(result[0], result[1], result[2]);
            let index = result.indexOf(getMax);
            result.splice(index, 1) 
        }
    }

    result = result.sort(function(a, b){return a - b});
    console.log(result);
}

smallestTwoNumber([3, 0, 10, 4,7, 3]);