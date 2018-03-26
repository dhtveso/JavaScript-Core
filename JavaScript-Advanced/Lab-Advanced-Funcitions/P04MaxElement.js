function solve(params) {
    return params.reduce((a,b)=> Math.max(a,b));
}

solve([10, 20, 5])