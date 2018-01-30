function linkExtractor(params) {
    let regex = new RegExp(/((www)\.([A-Za-z0-9-]+))(\.[a-z]+)+/, 'g');
    let match;

    while (match = regex.exec(params)) {
        console.log(match[0]);
    }
}