function binaryLogarithm(params) {
    params.forEach(element => {
        console.log(Math.log2(Number(element)))
    });
}

binaryLogarithm([5, 5 , 6, 1024])