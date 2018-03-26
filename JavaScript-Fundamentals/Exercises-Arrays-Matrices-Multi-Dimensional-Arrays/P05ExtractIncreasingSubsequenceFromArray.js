function filterArray(arr) {
    var maxNumber = 0;
    let newArr = arr.filter(filterByNumber);
    print(newArr);

    function filterByNumber(number) {
        if (number >= maxNumber) {
            maxNumber = number;
            return true;
        }
    }
    
    function print(arr) {
        console.log(arr.join('\n'));
    }
}

filterArray([1,
    3,
    8,
    8,
    10,
    3,
    22
    ])