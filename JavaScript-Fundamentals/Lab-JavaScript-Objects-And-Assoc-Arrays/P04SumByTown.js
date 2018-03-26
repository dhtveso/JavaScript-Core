function sumByTown(array) {
    let obj = {};

    for (let i = 0; i < array.length; i+=2) {
        if (obj.hasOwnProperty(array[i])) {
            obj[array[i]] += Number(array[i+1]);
        } else {
            obj[array[i]] = Number(array[i + 1]);
        }
    }

    console.log(JSON.stringify(obj));
}

sumByTown(
['Sofia',
20,
'Varna',
3,
'Sofia',
5,
'Varna',
4]);