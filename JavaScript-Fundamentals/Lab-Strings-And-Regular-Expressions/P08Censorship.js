function censorship(text, censuredWords) {
    for (let i = 0; i < censuredWords.length; i++) {
        let currentWord = censuredWords[i];
        let censoredWord = text.indexOf(currentWord);

        while (censoredWord > -1) {
            text = text.replace(currentWord, '-'.repeat(currentWord.length));
            censoredWord = text.indexOf(currentWord);
        }
    }

    console.log(text);
}

censorship('roses are red, violets are blue', [', violets are', 'red']);