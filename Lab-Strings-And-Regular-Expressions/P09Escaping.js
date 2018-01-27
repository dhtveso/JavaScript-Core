function escaping(array) {
    let result = '<ul>\n'
    
    for (let str of array) {
        result += '   <li>' + htmlEscape(str) + '</li>\n';
    }

    result += '</ul>'
    console.log(result);
    

    function htmlEscape(str) {
        return str.replace(/&/g, '&amp;')
                   .replace(/</g, '&lt;')
                   .replace(/>/g, '&gt;')
                   .replace(/"/g, '&quot;')
                   .replace(/'/g, '&#39;');
    }
}

escaping(['<b>unescaped text</b>', 'normal text']);