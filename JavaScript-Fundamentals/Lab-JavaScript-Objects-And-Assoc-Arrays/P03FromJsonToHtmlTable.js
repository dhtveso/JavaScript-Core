function jsonToHtml(jsonString) {
    let arr = JSON.parse(jsonString);
    let result = '<table>\n'
    result += '  <tr>'
    let keys = Object.keys(arr[0]);

    for (let key of keys) {
        result += `<th>${key}</th>`;
    }
    
    result += '</tr>\n';

    for (let obj of arr) {
        result += '    <tr>';
        for (let i = 0; i < keys.length; i++) {
            result += `<td>${htmlEscape(obj[keys[i]].toString())}</td>`
        }

        result += '</tr>\n'
    }

    result += '</table>'

    console.log(result);
    

    function htmlEscape(str) {
        return str.replace(/&/g, '&amp;')
                   .replace(/</g, '&lt;')
                   .replace(/>/g, '&gt;')
                   .replace(/"/g, '&quot;')
                   .replace(/'/g, '&#39;');
    }
}

jsonToHtml('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');