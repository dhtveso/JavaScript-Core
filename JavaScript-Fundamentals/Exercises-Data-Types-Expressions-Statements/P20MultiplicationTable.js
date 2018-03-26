function multiplicationTable(tableSize) {
    let openTag = '<tr><th>';
    let middleTag = '</th><th>';
    let closeTag = '</th></tr>';
    let openTableTag = '<table border="1">';
    let closeTableTag = '</table>';

    console.log(openTableTag);
    let result = '  ';
    for (let i = 0; i <= tableSize; i++) {
        if (i == 0) {
            result += openTag + 'x';
        }
        else if (i == tableSize) {
            result += middleTag + i + closeTag;
        } else {
            result += middleTag + i;
        }
    }

    console.log(result);
    result = '  ';

    for (let i = 1; i <= tableSize; i++) {
        result += openTag + i + '</th>';
        for (let j = 1; j <= tableSize; j++) {
            result += '<td>' + `${j * i}` + '</td>';
        }
        result += '</tr>';

        console.log(result);
        result = '  ';
        
    }

    console.log(closeTableTag);
}

multiplicationTable(3);