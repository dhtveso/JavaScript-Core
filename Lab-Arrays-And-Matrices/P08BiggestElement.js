function getMax(arr) {
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
        let currentMax = Number.NEGATIVE_INFINITY;

        for (let j = 0; j < arr[i].length; j++) {
            if (currentMax < arr[i][j]) {
                currentMax = arr[i][j];
            }
        }

        if (currentMax > max) {
            max = currentMax;
        }
    }
    console.log(max);
}

getMax([[20, 50, 10],
    [8, 33, 145]]
   )