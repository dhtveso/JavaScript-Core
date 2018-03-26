function calculator(a, b, symbol) {
    if (b < 0 && symbol == '-') {
        b = Math.abs(b);
        console.log(eval(`${a * 1} + ${b * 1}`));
    } else{
        console.log(eval(`${a * 1}${symbol}${b * 1}`));
    }
    
}

calculator(1, -1, '-');