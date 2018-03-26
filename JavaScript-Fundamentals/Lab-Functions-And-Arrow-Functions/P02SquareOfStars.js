function squareOfStar(number) {
    let squareSize = 0;

    if (!number) {
        squareSize = 5;
    } else{
        squareSize = number;
    }

    for (let i = 1; i <= squareSize; i++) {
        console.log(Array(squareSize + 1).join("* "));
    }
    
}

squareOfStar();