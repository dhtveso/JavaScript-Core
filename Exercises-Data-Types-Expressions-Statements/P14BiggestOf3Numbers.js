function getMax(numbers) {
    //let firstNumber = numbers[0];
    //let secondNumber = numbers[1];
    //let thirdNumber = numbers[2];
    //console.log(Math.max(firstNumber, secondNumber, thirdNumber));
    let maxNumber = 0;

    for (let number of numbers) {
        if (number > maxNumber) {
            maxNumber = number;
        }
    }

    console.log(maxNumber);
}

getMax([5, -2, 7]);