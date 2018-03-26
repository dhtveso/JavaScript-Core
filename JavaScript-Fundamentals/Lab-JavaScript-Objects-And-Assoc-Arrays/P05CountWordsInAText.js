function countWord(array) {
    let neededWords = array[0].split(/[^\w]/).filter(x => x !== '');
    let obj = {};

    for (let word of neededWords) {
        if (obj.hasOwnProperty(word)) {
            obj[word]++;
        } else{
            obj[word] = 1;
        }
    }

    console.log(JSON.stringify(obj));
}

countWord(['Far too slow, you\'re far too slow.'])