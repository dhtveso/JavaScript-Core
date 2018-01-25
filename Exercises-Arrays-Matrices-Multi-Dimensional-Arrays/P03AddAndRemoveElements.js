function addRemoveElement(commandsArray) {
    let result = [];
    let count = 1;

    for (let i = 0; i < commandsArray.length; i++) {
        if (commandsArray[i] == 'add') {
            result.push(count);
            count++;
        } else if (commandsArray[i] == 'remove') {
            result.pop();
            count++;
        }
    }

    if (result.length == 0) {
        console.log('Empty');
    } else{
        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
        }
    }
}