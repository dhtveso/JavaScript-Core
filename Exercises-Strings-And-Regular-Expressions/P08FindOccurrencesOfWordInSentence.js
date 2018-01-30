function findOccurrences(wordSentence, neededWord) {
    let regex = new RegExp(`\\b${neededWord}\\b`, 'gi');
    let regex1 = new RegExp(/\b.+\b/)
    let match;
    let count = 0;

    while (match = regex.exec(wordSentence)) {
        count++;
    }

    console.log(count);
    
}

findOccurrences('The waterfathell was so high, that the child couldn’t see its peak.', 'the');