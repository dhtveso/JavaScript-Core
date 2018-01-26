function sumRowCol(arr) {
    let matrix = arr;
    let magic = [];
      
    // sums of rows
    let rowSum = matrix.map(r => r.reduce((a, b) => a + b));
    // sums of columns
    let colSum = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));
    
    magic = Array.from(new Set(rowSum));
    magic = Array.from(new Set(colSum));

    if (magic.length === 1) {
        console.log('true');
        
    } else {
        console.log('false');
    }
}

sumRowCol([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );