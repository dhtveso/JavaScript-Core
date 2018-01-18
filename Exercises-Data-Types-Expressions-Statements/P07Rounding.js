function rounding(arr) {
    let incomeingNumber = arr[0];
    let precision = arr[1];
    let neededNumber = 1;

    if (precision > 15) {
        precision = 15;
    }
    
    for (let i = 0; i < precision; i++) {
        neededNumber *= 10;
    }

    return Math.round(arr[0] * neededNumber) / neededNumber
    //return Number.parseFloat(arr[0]).toPrecision(arr[1]+1);
}

console.log(rounding([3.1415926535897932384626433832795, 5]));