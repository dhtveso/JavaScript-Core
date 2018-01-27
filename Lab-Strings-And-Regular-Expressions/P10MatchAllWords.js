function matchWords(text) {
    let pattern = /[^A-Za-z0-9_]/;
    let arr = text.split(pattern).filter(l => l != '');

    arr.forEach(element => {
        element.trim();
    });
    console.log(arr.join('|'));
}

matchWords('_(Underscores) are also word characters')