function findVariable(string) {
    let regex = new RegExp(/\b_([A-Za-z0-9]+)\b/, 'g');
    let match;
    let result = [];

    while (match = regex.exec(string)) {
        result.push(match[1]);
    }

    console.log(result.join(','));
}

findVariable('Calculate the _area of the _perfectRectangle object.');