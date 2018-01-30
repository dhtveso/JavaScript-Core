function matchMultiplication(input) {
    let re = new RegExp(/([\-0-9]+)\s*\*\s*([\-0-9.]+)\s*\(([A-Za-z]+)\)/, 'g');
    let result = [];
    let match;
    let start = input.substring(0, input.indexOf(':'));
    
    while (match = re.exec(input)) {
        result.push(`${match[1] * match[2]} (${match[3]})`);
    }

    console.log(`${start}: ${result.join('; ')}.`);
}