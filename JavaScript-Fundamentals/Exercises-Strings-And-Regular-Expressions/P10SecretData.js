function secretData(input) {
    let result = [];
 
    for (let value of input) {
        replaceString(value, result)
    }
 
    console.log(result.join('\n'));
 
    function replaceString(value, arr) {
        arr.push(value
           .replace(/(\*[A-Z][A-Za-z]*(?=\s|$))|(\+[0-9-]{10}(?=\s|$))|(![A-Za-z0-9]+(?=\s|$))|(_[A-Za-z0-9]+(?=\s|$))/g,
           m => '|'.repeat(m.length)))
    }
}