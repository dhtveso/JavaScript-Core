function getUniqueWord(array) {
    let words = new Set();

    for (let i = 0; i < array.length; i++) {
        let currentLine = array[i].split(/[^\w]+/).filter(s => s !== '');

        for (let j = 0; j < currentLine.length; j++) {
            words.add(currentLine[j].toLowerCase());
        }        
    }
    
    let arr = [];

    for (let word of words) {
        arr.push(word);
    }

    console.log(arr.join(', '));
    
}

getUniqueWord([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.', 
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla. ',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis. ',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut. ',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu. ',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus. ',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']);