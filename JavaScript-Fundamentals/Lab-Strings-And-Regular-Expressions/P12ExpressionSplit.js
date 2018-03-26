function expressionSplit(currentString) {
    let pattern = /[,;.\s()]/g;

    let arr = currentString.split(pattern).filter(s => s != '');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        
    }
}
