function printElement(array) {
    let step = Number(array[array.length -1]);

    for (let i = 0; i < array.length; i+= step) {
        console.log(array[i]);
    }
}

printElement([5,20,31,4,20,2])