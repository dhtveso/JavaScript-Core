function capitalizeTheWords(input) {
    let words = input.split(' ').filter(s => s != "");
    let result = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        result.push(word[0].toUpperCase() + word.substring(1));
    }

    console.log(result.join(' '));
}

capitalizeTheWords('AsdFs asd    fw wq');