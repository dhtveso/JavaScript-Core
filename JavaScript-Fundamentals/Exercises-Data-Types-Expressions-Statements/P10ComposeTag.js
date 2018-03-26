function composeTag(tagInfo) {
    let fileLocation = tagInfo[0];
    let alternateText = tagInfo[1];

    console.log(`<img src="${fileLocation}" alt="${alternateText}">`);
}

composeTag(['smiley.gif', 'Smiley Face']);