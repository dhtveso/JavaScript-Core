function sortingArray(arr) {
    let newArr = arr.sort(sortingByCondition);

    function sortingByCondition(a, b) {
        if (a.length - b.length !== 0) {
            return a.length - b.length;
        } 
        if(a.length - b.length === 0){
            return a > b;
        }
    }
    console.log(newArr.join('\n'));
}

sortingArray(['Deny',
    'omen',
    'test',
    'Default'
    ])