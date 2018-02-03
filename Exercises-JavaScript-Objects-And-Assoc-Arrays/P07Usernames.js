function uniqueUsername(array) {
    let unique = new Set();
    for (let i = 0; i < array.length; i++) {
        unique.add(array[i]);
    }

    let result = Array.from(unique).sort((a,b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else{
            return a.localeCompare(b);
        }
    })

    console.log(result.join('\n'));
    
}

uniqueUsername([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']);