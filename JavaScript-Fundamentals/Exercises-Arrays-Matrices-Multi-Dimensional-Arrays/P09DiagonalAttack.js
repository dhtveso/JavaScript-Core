function diagonalSums(arr) {
    let matrix = [];

    for (let row = 0; row < arr.length; row++) {
        matrix.push(arr[row].split(" ").map(Number));
    }

    let mainSum = 0, secondarySum = 0;

    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length - row - 1];
    }
    
    if (mainSum == secondarySum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row != col && col != matrix[col].length -1 -row) {
                    matrix[row][col] = mainSum;
                }
            }            
        }
    }
    let result = '';
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            result += matrix[row][col] + ' ';
        }
        result += '\n';
    }

    console.log(result);
}

diagonalSums(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
)