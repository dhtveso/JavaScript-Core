function modifyAverage(inputNumber) {
    const numberToAppend = '9';
    let avg = checkAverage(inputNumber);

    while (avg <= 5) {
        inputNumber = appendNumber(inputNumber)
        avg = checkAverage(inputNumber);
    }

    console.log(inputNumber);

    function checkAverage(inputNumber) {
        let value = inputNumber;
        let length = 0;
        sum = 0;

        while (value) {
            sum += value % 10;
            value = Math.floor(value / 10);
            length++;
        }

        return parseFloat(sum) / length;
    }

    function appendNumber(inputNumber) {
        return inputNumber + numberToAppend;
    }
}

modifyAverage(100000)