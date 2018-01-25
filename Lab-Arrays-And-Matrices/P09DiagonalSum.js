function diagonalSum(arr){
    let leftDiagonal = 0;
    let rightDiagonal = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i == j) {
                if (j == arr[j].length -1 -i) {
                    rightDiagonal += arr[i][j];
                }
                leftDiagonal += arr[i][j];
            } else if (j == arr[j].length -1 -i) {
                rightDiagonal += arr[i][j];
            }
        }
    }
    
    console.log(leftDiagonal, rightDiagonal);
}

diagonalSum([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);