function startWith(inputString, startsWord) {
    let startIndex = inputString.indexOf(startsWord);

    if (startIndex === 0) {
        console.log('true');
    } else {
        console.log('false');
    }
}

function startWithSecondVariant(inputString, startsWord) {
    let result = inputString.startsWith(startsWord);

    console.log(result);
    
}


startWithSecondVariant('How have you been?', 'How');