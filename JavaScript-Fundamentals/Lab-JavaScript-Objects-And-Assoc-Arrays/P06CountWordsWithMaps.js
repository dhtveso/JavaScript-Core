function countWordMap(array) {
    let neededWords = array[0].split(/[^\w]/).filter(x => x !== '');
    let myMap = new Map();

    for (let word of neededWords) {
        word = word.toLowerCase();
        if (!myMap.has(word)) {
            myMap.set(word, 1);
        } else{
            myMap.set(word, myMap.get(word) + 1);
        }
    }

    let sortedKeys = Array.from(myMap.keys()).sort((a, b) => a.localeCompare(b));

    for (let key of sortedKeys) {
        console.log(`'${key}' -> ${myMap.get(key)} times`);
    }
}

countWordMap(['Far too slow, you\'re far too slow.'])