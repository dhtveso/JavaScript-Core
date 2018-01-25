function equalNeighbors(input) {
    let matrix = input;
    let counter = 0;

    for(let row = 0; row < matrix.length; row++) {
        for(let col=0; col< matrix[row].length - 1; col++) {
            if(matrix[row][col] == matrix[row][col+1]) {
                counter++;
            }
        }
    }

    for(let row = 0; row< matrix.length - 1; row++) {
        for(let col = 0; col< matrix[row].length; col++) {
            if(matrix[row][col] == matrix[row+1][col]) {
                counter++;
            }
        }
    }

    console.log(counter);
}

equalNeighbors([['2', '2', '5', '7', '4'],
                ['4', '0', '5', '3', '4'],
                ['2', '5', '5', '4', '2']])
