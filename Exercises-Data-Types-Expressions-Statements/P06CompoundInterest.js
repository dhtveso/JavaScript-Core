function compoundInterest(arr) {
    let principalSum = arr[0];
    let nominalInterest = arr[1];
    let compoundingFrequency = arr[2] / 100;
    let overallLength = arr[3];

    let totalAccumulatedValue = principalSum * Math.pow((1 + nominalInterest / compoundingFrequency), compoundingFrequency * overallLength);
    console.log(totalAccumulatedValue);
}

compoundInterest([1500, 4.3, 3, 6]);