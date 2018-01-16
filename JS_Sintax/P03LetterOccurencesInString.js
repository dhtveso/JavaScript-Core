function letterOccurrencesInString(string, letter){
    let counter = 0;
    for (let index = 0; index < string.length; index++) {
        if (string[index] == letter) {
            counter++;
        }
    }

    console.log(counter);
}

letterOccurrencesInString('aadaa','a')