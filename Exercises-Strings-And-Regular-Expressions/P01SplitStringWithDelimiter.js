function splitter(inputString, delimeter) {
    let result = inputString.split(delimeter).filter(x => x != '');
    
    console.log(result.join('\n'));
    
}

splitter('One-Two-Three-Four-Five', '-');