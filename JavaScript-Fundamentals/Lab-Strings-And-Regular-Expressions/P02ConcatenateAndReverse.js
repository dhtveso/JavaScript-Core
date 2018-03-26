function concatAndReverse(array) {
    let result = Array.from(array.join('')).reverse().join('');

    console.log(result);
}