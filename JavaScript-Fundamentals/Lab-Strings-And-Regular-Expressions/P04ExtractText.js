function textExtractor(inputStr) {
    let index = 0;
    let result = [];
    while (true) {
        let index = inputStr.indexOf('(');
        let endIndex = inputStr.indexOf(')');
        if (index < 0 || endIndex < 0 || index >= endIndex) {
            break;
        }

        let currentResult = inputStr.substring(index + 1, endIndex);
        result.push(currentResult);
        inputStr = inputStr.substring(endIndex + 1);
    }

    console.log(result.join(', '));
}

textExtractor('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink))')