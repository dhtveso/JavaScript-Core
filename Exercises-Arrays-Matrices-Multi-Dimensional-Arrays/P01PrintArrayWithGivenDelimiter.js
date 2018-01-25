function printArray(array) {
    let delimeter = array[array.length -1]
    let result = '';

    for (let i = 0; i < array.length - 1; i++) {
        if (i < array.length - 2) {
            result += array[i] + delimeter;
        } else{
            result += array[i];
        }
        
    }

    console.log(result);
}

printArray(['One', 'Two', 'Three', 'Four', 'Five', '-'])