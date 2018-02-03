function jsonTable(array) {
    let result = '<table>\n';
    for (let i = 0; i < array.length; i++) {
        let currentLine = JSON.parse(array[i]);
        result += ' <tr>\n';
        result += `     <td>${currentLine.name}</td>\n`;
        result += `     <td>${currentLine.position}</td>\n`;
        result += `     <td>${currentLine.salary}</td>\n`;
        result += '     <tr>\n';
    }

    result += '</table>\n';

    console.log(result);
    
}

jsonTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);