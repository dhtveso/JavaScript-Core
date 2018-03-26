function aggregate(array) {
    let result = [];
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        let element = array[i].split('|').filter(e => e != '');
        result.push(element[0].trim());
        sum += Number(element[1]);
    }

    console.log(result.join(', '));
    console.log(sum);
}

aggregate(['| Sofia           | 300',
'| Veliko Tarnovo  | 500',
'| Yambol          | 275'])