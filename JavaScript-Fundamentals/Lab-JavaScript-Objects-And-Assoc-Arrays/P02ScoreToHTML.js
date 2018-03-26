function scoreToHtml(stringInput) {
    let arr = JSON.parse(stringInput);
    let result = '<table>\n'
    let openTan = '    <tr><td>';
    let middleTag = '</td><td>';
    let closeTag = '</td></tr>';
    let keys = Object.keys(arr[0]);

    result += `  <tr><th>${keys[0]}</th><th>${keys[1]}</th></tr>\n`;

    for (const obj of arr) {
        result += `${openTan}${htmlEscape(obj[keys[0]])}${middleTag}${obj[keys[1]]}${closeTag}\n`;
    }
    

    result += '</table>';

    console.log(result);
    
    function htmlEscape(str) {
        return str.replace(/&/g, '&amp;')
                   .replace(/</g, '&lt;')
                   .replace(/>/g, '&gt;')
                   .replace(/"/g, '&quot;')
                   .replace(/'/g, '&#39;');
    }
}

scoreToHtml('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');